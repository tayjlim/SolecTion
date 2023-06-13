from app.models.db import db, environment, SCHEMA
from app.models.reviews import Reviews
from sqlalchemy.sql import text

def tienkissesdudes_reviews():
    review_1=Reviews(
        user_id = 1 ,
        item_id = 1,
        desc = 'These are forsure a cop!',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1118223469398724720/Eizn9DnWoAA8YjE.jpg'

    )
    db.session.add(review_1)
    db.session.commit()

def under_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
