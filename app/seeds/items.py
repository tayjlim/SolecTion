from sqlalchemy.sql import text
from app.models.items import Items
from app.models.db import db, environment, SCHEMA

def undo_items():

    shoe1 = Items(
        owner_id = 2,
        name = 'Nike SB Dunk Low "Chicago',
        desc = 'The Nike SB Dunk Low "Chicago" features a classic colorway inspired by the Chicago Bulls. It has a red and black leather upper with white accents.',
        price = 120,
        picture_aws_link = 'https://cdn.discordapp.com/attachments/1118210959077556414/1118211310547636224/img36.jpg')

    shoe2 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe3 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe4 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe5 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe6 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe6 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe6 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe6 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )
    shoe6 = Items(
        owner_id = 2,
        name= '',
        desc = ''
        price = 120,
        picture_aws_link=''
    )



    db.session.add(shoe1)
    db.session.commit()

def under_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM items"))

    db.session.commit()
