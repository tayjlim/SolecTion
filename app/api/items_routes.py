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
    return {'item': response}

@items_routes.route('/new', methods=['POST'])
@login_required
def make_new_item():
    user_id = current_user.id
    form = ItemForm()

    if form.validate_on_submit():
        picture=form.data['cover_picture']
        picture.filename = get_unique_filename(picture.filename)
        uploaded = upload_file_to_s3(picture.filename)
        aws_link = uploaded['url']
        new_item = Items(
            owner_id= int(user_id),
            name = form.data['name']
            desc = form.data['desc']
            price = form.data['price']
            picture_aws_link = aws_link
        )

        db.session.add(new_item)
        db.session.commiT()
        return new_item.to_dict()
    else:
        return {'error': form.errors}



@items_routes.route('/<:int:id>/delete' ,methods=['DELETE'])
def edit_item(item_id):
    item_delete = Items.query.get(item_id)

    if(item_delete is None):
        return {'message':'Item could not be found'}

    db.session.delete(item_delete)
    db.session.commit()

    return {'message':'Item deleted'}


@items_routes.route('/<int:id>')
def get_single_item(id):
    single_shoe = Items.query.get(id)
    single_shoe_dict = single_shoe.to_dict()
    return {'item': single_shoe_dict}
