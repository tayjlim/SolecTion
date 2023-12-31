from flask import Blueprint, jsonify, session, request, redirect
from app.models.db import db
from app.models.items import Items
from flask_login import current_user, login_user, logout_user, login_required
from app.models.reviews import Reviews
from app.api.aws_helpers import get_unique_filename,upload_file_to_s3,remove_file_from_s3
from app.forms.post_item_form import ItemForm
from app.forms.edit_item_form import EditItemForm
from app.forms.edit_review_form import EditReviewForm
from app.forms.post_review_form import ReviewForm
from app.models.user import User

items_routes = Blueprint('items',__name__)

@items_routes.route('')
def get_all_items():
    all_items = Items.query.all()
    response = [item.to_dict() for item in all_items]
    return {'items': response}


@items_routes.route('/new', methods=['POST'])
@login_required
def make_new_item():


    form = ItemForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    user_id = current_user.id
    if form.validate_on_submit():
        picture=form.data['picture_aws_link'] # file
        picture.filename = get_unique_filename(picture.filename) # get a unique name
        uploaded = upload_file_to_s3(picture) #upload to aws
        aws_link = uploaded['url']
        new_item = Items(
            owner_id= user_id,
            name = form.data['name'],
            desc = form.data['desc'],
            price = form.data['price'],
            picture_aws_link = aws_link
        )

        db.session.add(new_item)
        db.session.commit()
        return new_item.to_dict()
    else:
        return {'error': form.errors} , 400



@items_routes.route('/<int:id>/reviews')
def get_items_reviews(id):
    items_reviews = Reviews.query.filter(Reviews.item_id == id).all()
    if items_reviews:
        response = []
        for review in items_reviews:
            # print('+_+_+_+_+_+_+_+_+_+_+', review.to_dict())
            response.append(review.to_dict())

        return {"reviews":response}
    else:
        return {"reviews":[] }

@items_routes.route('/<int:id>/reviews/new',methods=['POST'])
@login_required
def post_new_review(id):
    user_id = current_user.id
    item_id = id
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        picture = form.data['picture_aws_link']
        picture.filename = get_unique_filename(picture.filename)
        uploaded = upload_file_to_s3(picture)
        aws_link = uploaded['url']

        new_review = Reviews(
            user_id = user_id,
            item_id = item_id,
            desc = form.data['desc'],
            picture_aws_link = aws_link
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return {'errors':'bad data'}


@items_routes.route('/<int:id>' ,methods=["DELETE"])
@login_required
def edit_item(id):
    item_delete = Items.query.get(id)
    item_obj = item_delete.to_dict()

    if(item_delete is None):
        return {'message':'Item could not be found'}

    user_id = current_user.id
    #add logic of user_id matching the itemOwner Id
    remove_file_from_s3(item_delete.picture_aws_link)

    db.session.delete(item_delete)
    db.session.commit()

    return {'message':'Item deleted'}



@items_routes.route('/<int:id>/edit', methods = ['PUT'])
@login_required
def weoweoweo(id):
    single_shoe = Items.query.get(id)

    form = EditItemForm()
    aws_link = ''

    if form.data['picture_aws_link']:
        picture = form.data['picture_aws_link']

        picture.filename = get_unique_filename(picture.filename)
        uploaded = upload_file_to_s3(picture)
        aws_link = uploaded['url']

        remove_file_from_s3(single_shoe.picture_aws_link)

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        single_shoe.name = form.data['name']
        single_shoe.desc = form.data['desc']
        single_shoe.price = form.data['price']

        if len (aws_link) > 0:
            single_shoe.picture_aws_link = aws_link

        db.session.commit()
        edited_singleShoe = single_shoe.to_dict()
        return edited_singleShoe
    else:
        return 401

@items_routes.route('/<int:id>')
def get_single_item(id):
    single_shoe = Items.query.get(id)
    single_shoe_dict = single_shoe.to_dict()
    return {'item': single_shoe_dict}

@items_routes.route('/review/<int:id>/edit', methods =['PUT'])
def edit_review(id):
    single_review = Reviews.query.get(id)

    edited = EditReviewForm()
    aws_link =''

    if edited.data['picture_aws_link']:
        picture = edited.data['picture_aws_link']
        picture.filename = get_unique_filename(picture.filename)
        uploaded  = upload_file_to_s3(picture)
        aws_link = uploaded['url']

        remove_file_from_s3(single_review.picture_aws_link)

    edited["csrf_token"].data = request.cookies["csrf_token"]

    #update the review
    if edited.validate_on_submit():
        single_review.desc = edited.data['desc']

        if len(aws_link)>0:
            single_review.picture_aws_link = aws_link
        db.session.commit()
        return single_review.to_dict()


@items_routes.route('/reviews/<int:id>/deleteThat',methods=['DELETE'])
def delete_review(id):
    review_delete = Reviews.query.get(id)

    if(review_delete is None):
        return {"message": 'item Could not be found'}, 400

    remove_file_from_s3(review_delete.picture_aws_link)

    db.session.delete(review_delete)
    db.session.commit()

    return {'message' : 'Item Deleted'}
