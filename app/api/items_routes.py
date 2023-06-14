from flask import Blueprint, jsonify, session, request, redirect
from app.models.db import db
from app.models.items import Items
from flask_login import current_user, login_user, logout_user, login_required
from app.models.reviews import Reviews
from app.api.aws_helpers import get_unique_filename,upload_file_to_s3,remove_file_from_s3
from app.forms.post_item_form import ItemForm

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
        return {'error': form.errors}



@items_routes.route('/<int:id>/delete' ,methods=['DELETE'])
@login_required
def edit_item(item_id):
    item_delete = Items.query.get(item_id)
    user_id = current_user.id

    if(item_delete is None):
        return {'message':'Item could not be found'}

    if item_delete['owner_id'] != user_id :
        return {'message':'Forbidden'}


    remove_file_from_s3(item_delete['picture_aws_link'])
    db.session.delete(item_delete)
    db.session.commit()

    return {'message':'Item deleted'}

# @items_routes.route('/<int:id>', methods = ['PUT'])
# def get_single_item(id):
#     single_shoe = Items.query.get(id)
#     single_shoe_dict = single_shoe.to_dict()
#     return {'item': single_shoe_dict}

@items_routes.route('/<int:id>')
def get_single_item(id):
    single_shoe = Items.query.get(id)
    single_shoe_dict = single_shoe.to_dict()
    return {'item': single_shoe_dict}