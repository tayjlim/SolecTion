from app.models.db import db, environment, SCHEMA
from app.models.reviews import Reviews
from sqlalchemy.sql import text

def tienkissesdudes_reviews():

    review_1c=Reviews(
        user_id = 1 ,
        item_id = 1,
        desc = 'These are forsure a cop!',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1118223469398724720/Eizn9DnWoAA8YjE.jpg'
    )
    review_2c=Reviews(
        user_id = 4,
        item_id = 1,
        desc = 'Looks good with Jeans',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1119365487323791541/Nike-SB-Dunk-Low-Pro-2.png'
    )
    review_3c=Reviews(
        user_id = 3,
        item_id = 1,
        desc = 'Looks good with Jeans',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1119365518588129381/2Q.png'
    )

    review_1t=Reviews(
        user_id = 1,
        item_id = 2,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1119370340062216242/Nike-Dunk-Low-SB-Travis-Scott-Cactus-Jack-WDYWT-On-Feet.png'
    )
    review_2t=Reviews(
        user_id = 3,
        item_id = 2,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1119369236444356809/2Q.png'
    )
    review_3t=Reviews(
        user_id = 4,
        item_id = 2,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1119369278848774245/images.png'
    )



    db.session.add(review_1c)
    db.session.add(review_2c)
    db.session.add(review_3c)

    db.session.add(review_1t)
    db.session.add(review_2t)
    db.session.add(review_3t)



    db.session.commit()

def under_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
