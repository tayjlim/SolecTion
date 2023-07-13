from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .reviews import Reviews
from app.models.cart import cart


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
    #Connecting to Item
    item = db.relationship('Items', cascade="all,delete-orphan",back_populates = 'userid')
    #connecting to User
    review = db.relationship('Reviews', cascade="all,delete-orphan", back_populates = 'review_user_id')

    #many to many JOIN table suhhh
    item_cart = db.relationship('Items', secondary = cart, back_populates = 'user_cart')

    def to_dict(self):
        item_ids = []

        for item in self.item_cart:
            item_ids.append(item.id)

        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'cartId':item_ids
        }
