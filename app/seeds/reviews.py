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

    review_tiff1=Reviews(
        user_id = 1,
        item_id = 3,
        desc = 'amazing with everything',
        picture_aws_link = 'https://media.discordapp.net/attachments/1118210959077556414/1120407016612036721/tumblr_n0qmrexE6B1r92k5yo1_1280.jpg?width=705&height=497'
    )
    review_tiff2=Reviews(
        user_id = 3,
        item_id = 3,
        desc = 'amazing with everything',
        picture_aws_link = 'https://media.discordapp.net/attachments/1118210959077556414/1120407016918229002/f7oyfuoqkqpcata3gi9w.jpg?width=705&height=470'
    )
    review_tiff3=Reviews(
        user_id = 4,
        item_id = 3,
        desc = 'amazing with everything',
        picture_aws_link = 'https://media.discordapp.net/attachments/1118210959077556414/1120407016360398878/maxresdefault.jpg?width=705&height=397'
    )


    review_p1= Reviews(
        user_id = 1,
        item_id = 4,
        desc = 'amazing with everything',
        picture_aws_link = 'https://media.discordapp.net/attachments/1118210959077556414/1120409161314861137/tumblr_mlb5gf8hV21r92k5yo1_1280.png?width=705&height=470'
    )
    review_p2= Reviews(
        user_id = 3,
        item_id = 4,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1120407016091951145/Nike-Dunk-Low-SB-Purple-Pigeon-WDYWT-On-Feet.jpg'
    )
    review_p3 = Reviews(
        user_id = 4,
        item_id = 4,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1120407015831896084/CYFev_yWQAEip8-.jpg'
    )

    review_h1= Reviews(
        user_id = 1,
        item_id = 5,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1120406989076451408/tumblr_mzgi7kRl4b1qasbq2o1_1280.jpg'
    )
    review_h2= Reviews(
        user_id = 3,
        item_id = 5,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1120406989319708842/tumblr_m14ie0Kb0L1r8zl1uo1_640.jpg'
    )
    review_h3= Reviews(
        user_id = 4,
        item_id = 5,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1120406989575557140/Nike-Dunk-Low-SB-Heineken-WDYWT-On-Feet-1.jpg'
    )








    db.session.add(review_1c)
    db.session.add(review_2c)
    db.session.add(review_3c)

    db.session.add(review_1t)
    db.session.add(review_2t)
    db.session.add(review_3t)

    db.session.add(review_tiff1)
    db.session.add(review_tiff2)
    db.session.add(review_tiff3)

    db.session.add(review_p1)
    db.session.add(review_p2)
    db.session.add(review_p3)

    db.session.add(review_h1)
    db.session.add(review_h2)
    db.session.add(review_h3)


    db.session



    db.session.commit()

    # review_pp= Reviews(
    #     user_id = 1,
    #     item_id = ,
    #     desc = 'amazing with everything',
    #     picture_aws_link = ''
    # )
     # review_pp= Reviews(
    #     user_id = 3,
    #     item_id = ,
    #     desc = 'amazing with everything',
    #     picture_aws_link = ''
    # )
     # review_pp= Reviews(
    #     user_id = 4,
    #     item_id = ,
    #     desc = 'amazing with everything',
    #     picture_aws_link = ''
    # )

def under_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
