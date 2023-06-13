from flask import Blueprint, jsonify, session, request, redirect
from app.models.items import Items
from app.models.reviews import Reviews

items_routes = Blueprint('items,'__name__)

@items_routes.route('')
def get_all_items():
    all_items = Items.query.all()
    res = []
