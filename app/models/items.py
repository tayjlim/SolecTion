from .db import db, add_prefix_for_prod, SCHEMA, environment
from .reviews import Reviews


class Items(db.Model):
    __tablename__ = 'items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id= db.Column(db.Integer, primary_key = True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(255),nullable = False)
    desc = db.Column(db.String(1000),nullable = False)
    price = db.Column(db.Integer, nullable=False)
    picture_aws_link=db.Column(db.String(500), nullable = False)

    def to_dict(self):

        return{
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'desc': self.desc,
            'price': self.price,
            'picture_aws_link': self.picture_aws_link
        }
    # connecting to user table

    userid = db.relationship(
        "User", back_populates = 'item'
    )

    # connecting to review table
    review_name = db.relationship(
        "Reviews",cascade="all,delete-orphan", back_populates = 'review_item_id'
    )
