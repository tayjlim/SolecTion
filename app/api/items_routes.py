from flask import Blueprint, jsonify, session, request, redirect
from app.models.items import Items
from app.models.reviews import Reviews

items_routes = Blueprint('items',__name__)

@items_routes.route('')
def get_all_items():
    all_items = Items.query.all()
    response = [item.to_dict() for item in all_items]
    return {'item': response}

@items_routes.route('/<int:id>')
def get_single_item(id):
    single_shoe = Items.query.get(id)
    single_shoe_dict = single_shoe.to_dict()
    return {'item': single_shoe_dict}
