from .db import db, add_prefix_for_prod, SCHEMA, environment

class Reviews(db.Model):

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('items.id')), nullable=False)
    desc = db.Column(db.String(1000), nullable=False)
    picture_aws_link = db.Column(db.String(500), nullable=False)

    #connecting to Items
    review_item_id = db.relationship(
        "Items", back_populates = 'review_name'
    )
    #connecting to User
    review_user_id = db.relationship('User', back_populates = 'review')
