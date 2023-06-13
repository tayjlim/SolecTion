from flask import Blueprint, jsonify, session, request, redirect
from app.models.db import db
from app.models.items import Items
from flask_login import current_user, login_user, logout_user, login_required
from app.models.reviews import Reviews

items_routes = Blueprint('items',__name__)

@items_routes.route('')
def get_all_items():
    all_items = Items.query.all()
    response = [item.to_dict() for item in all_items]
    return {'item': response}

@items_routes.route('')
@login_required
def make_new_item():
    # form = ItemForm()
    pass

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
