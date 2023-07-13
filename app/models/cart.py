from .db import db, add_prefix_for_prod, SCHEMA, environment

cart = db.Table('cart',
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key = True),
    db.Column('item_id', db.Integer, db.ForeignKey(add_prefix_for_prod('items.id')), primary_key = True),
    schema=SCHEMA if environment == "production" else None
)
