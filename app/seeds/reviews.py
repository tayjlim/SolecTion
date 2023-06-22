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
        picture_aws_link = 'https://www.kicksonfire.com/wp-content/uploads/2020/08/Nike-SB-Dunk-Low-Pro-8.jpeg?x58464'
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

    review_cement= Reviews(
        user_id = 1,
        item_id = 6,
        desc = 'amazing with everything',
        picture_aws_link = 'https://media.discordapp.net/attachments/1118210959077556414/1120743281299562596/Nike-SB-Dunk-Low-White-Supreme-Midsole-Whitened.png?width=705&height=470'
    )
    review_cement1= Reviews(
        user_id = 3,
        item_id = 6,
        desc = 'amazing with everything',
        picture_aws_link = 'https://media.discordapp.net/attachments/1118210959077556414/1120743281630916711/tumblr_nkt1sjBFhH1r92k5yo1_500.png'
    )
    review_cement2= Reviews(
        user_id = 4,
        item_id = 6,
        desc = 'amazing with everything',
        picture_aws_link = 'https://media.discordapp.net/attachments/1118210959077556414/1120743281945481276/5eeda2ab2b74f.png'
    )
    review_rg= Reviews(
        user_id = 1,
        item_id = 7,
        desc = 'amazing with everything',
        picture_aws_link = 'https://i.pinimg.com/originals/54/21/c5/5421c50f7e22fd9fea59977ca6913285.jpg'
    )
    review_rg1= Reviews(
        user_id = 3,
        item_id = 7,
        desc = 'amazing with everything',
        picture_aws_link = 'https://i.pinimg.com/originals/e0/30/11/e030111521b2e458448b58a89c0a9cef.jpg'
    )
    review_rg2= Reviews(
        user_id = 4,
        item_id = 7,
        desc = 'amazing with everything',
        picture_aws_link = 'https://live.staticflickr.com/7643/16639480867_12ef486bac_b.jpg'
    )

    review_nl1= Reviews(
        user_id = 1,
        item_id = 8,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.weartesters.com/wp-content/uploads/2014/11/Premier-x-Nike-SB-Dunk-High-Premium-Northern-Lights-Detailed-Look-Release-Info-3.jpg'
    )
    review_nl2= Reviews(
        user_id = 3,
        item_id = 8,
        desc = 'amazing with everything',
        picture_aws_link = 'https://cdn.sanity.io/images/c1chvb1i/production/aaa63501ff3b7da3b5fd68da41aa58aeb57da5ac-640x426.jpg/nike-sb-dunk-yeezy-4.jpg'
    )
    review_nl3= Reviews(
        user_id = 4,
        item_id = 8,
        desc = 'amazing with everything',
        picture_aws_link = 'https://i.pinimg.com/736x/6a/20/49/6a20497bf1b0b102ebf26b29d04c2a64.jpg'
    )

    review_tl1= Reviews(
        user_id = 1,
        item_id = 9,
        desc = 'amazing with everything',
        picture_aws_link = 'https://www.allaboutanthony.com/wp-content/uploads/2016/04/Nike-Dunk-SB-Low-Tiffany-Diamond-On-Feet-WDYWT.jpg'
    )
    review_tl2= Reviews(
        user_id = 3,
        item_id = 9,
        desc = 'amazing with everything',
        picture_aws_link = 'https://64.media.tumblr.com/e8f01000346947889a5bea58593dad32/tumblr_mid9f81ux31r92k5yo1_1280.jpg'
    )
    review_tl3= Reviews(
        user_id = 4,
        item_id = 9,
        desc = 'amazing with everything',
        picture_aws_link = 'https://i.pinimg.com/originals/ee/28/6f/ee286f13a60d01c706e26a652db69577.jpg'
    )

    review_fk1= Reviews(
        user_id = 1,
        item_id = 10,
        desc = 'amazing with everything',
        picture_aws_link = 'https://4.bp.blogspot.com/-OfYmJOV06Ao/WcoN6UvU69I/AAAAAAAA8iM/wKP1XQIwL_cFswUnzy_7onJL6a5vfvngwCLcBGAs/s1600/IMG_9209.JPG'
    )
    review_fk2= Reviews(
        user_id = 3,
        item_id = 10,
        desc = 'amazing with everything',
        picture_aws_link = 'https://pbs.twimg.com/media/EINXIxDWwAEnspQ.jpg'
    )
    review_fk3= Reviews(
        user_id = 4,
        item_id = 10,
        desc = 'amazing with everything',
        picture_aws_link = 'https://i.pinimg.com/originals/cf/ff/5d/cfff5d3294e0e9456b1e242847b3a0d0.jpg'
    )

    review_ph1= Reviews(
        user_id = 1,
        item_id = 11,
        desc = 'amazing with everything',
        picture_aws_link = 'https://i.pinimg.com/736x/fa/f6/59/faf6594a61269de026aafc29c1384b5e.jpg'
    )
    review_ph2= Reviews(
        user_id = 3,
        item_id = 11,
        desc = 'amazing with everything',
        picture_aws_link = 'https://i.pinimg.com/originals/4c/f5/62/4cf5629cfdb20d74a6b416c578407b08.jpg'
    )
    review_ph3= Reviews(
        user_id = 4,
        item_id = 11,
        desc = 'amazing with everything',
        picture_aws_link = 'https://images.solecollector.com/complex/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/blob_lvwqwf'
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


    db.session.add(review_cement)
    db.session.add(review_cement1)
    db.session.add(review_cement2)

    db.session.add(review_rg)
    db.session.add(review_rg1)
    db.session.add(review_rg2)

    db.session.add(review_nl1)
    db.session.add(review_nl2)
    db.session.add(review_nl3)

    db.session.add(review_tl1)
    db.session.add(review_tl2)
    db.session.add(review_tl3)

    db.session.add(review_fk1)
    db.session.add(review_fk2)
    db.session.add(review_fk3)

    db.session.add(review_ph1)
    db.session.add(review_ph2)
    db.session.add(review_ph3)




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
