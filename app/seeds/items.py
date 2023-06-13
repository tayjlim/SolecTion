from sqlalchemy.sql import text
from app.models.items import Items
from app.models.db import db, environment, SCHEMA

def undo_items():

    shoe1 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Chicago"',
    desc='The Nike SB Dunk Low "Chicago" features a classic colorway inspired by the Chicago Bulls. It has a red and black leather upper with white accents.',
    price=120,
    picture_aws_link='https://cdn.discordapp.com/attachments/1118210959077556414/1118211310547636224/img36.jpg'
    )

    shoe2 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Travis Scott"',
    desc='The Nike SB Dunk Low "Travis Scott" is a collaboration with rapper Travis Scott. It features earthy tones, removable paisley print overlays, and a hidden stash pocket.',
    price=120,
    picture_aws_link='https://images.stockx.com/360/Nike-SB-Dunk-Low-Travis-Scott/Images/Nike-SB-Dunk-Low-Travis-Scott/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635258995&h=384&q=57'
    )

    shoe3 = Items(
    owner_id=2,
    name='Nike SB Dunk High "Tiffany"',
    desc='The Nike SB Dunk High "Tiffany" is a classic colorway inspired by the diamond brand Tiffany & Co. It features a teal and black color scheme with silver accents.',
    price=120,
    picture_aws_link='https://images.stockx.com/360/Nike-Dunk-SB-High-Tiffany-Diamond/Images/Nike-Dunk-SB-High-Tiffany-Diamond/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635260833&h=384&q=57'
    )


    shoe4 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Pigeon"',
    desc='The Nike SB Dunk Low "Pigeon" is a legendary sneaker designed in collaboration with Jeff Staple. It gained significant attention due to its limited release and iconic pigeon logo on the heel.',
    price=120,
    picture_aws_link='https://images.stockx.com/images/Nike-Dunk-SB-Low-Purple-Pigeon.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1607045750&q=57'
    )

    shoe5 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Heineken"',
    desc="The Nike SB Dunk Low 'Heineken' pays homage to the famous beer brand. It features a green and black color scheme inspired by Heineken's branding, along with premium materials and details.",
    price=120,
    picture_aws_link='https://images.stockx.com/360/Nike-Dunk-SB-Low-Heineken/Images/Nike-Dunk-SB-Low-Heineken/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1634938669&h=384&q=57'
    )

    shoe6 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Supreme White Cement"',
    desc="The Nike SB Dunk Low 'Supreme' is a collaboration with the streetwear brand Supreme. It showcases unique colorways and materials, often incorporating Supreme's iconic box logo on the tongue or insole.",
    price=120,
    picture_aws_link='https://images.stockx.com/images/Nike-Dunk-SB-Low-Supreme-White-Cement-2002-Product.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1606321836&q=57'
    )

    shoe7 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Raygun"',
    desc='The Nike SB Dunk Low "Raygun" draws inspiration from the fictional Roswell Rayguns basketball team. It features vibrant colors, playful graphics, and an extraterrestrial theme.',
    price=120,
    picture_aws_link='https://images.stockx.com/360/Nike-Dunk-SB-Low-Raygun/Images/Nike-Dunk-SB-Low-Raygun/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635341960&h=384&q=57'
    )

    shoe8 = Items(
    owner_id=2,
    name='Nike SB Dunk High "Northern Lights"',
    desc='The Nike SB Dunk High "Northern Lights" takes inspiration from the mesmerizing natural phenomenon. It incorporates iridescent details and patterns to mimic the beauty of the aurora borealis.',
    price=120,
    picture_aws_link='https://images.stockx.com/360/Nike-Dunk-SB-High-Northern-Lights/Images/Nike-Dunk-SB-High-Northern-Lights/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635188255&h=384&q=57'
    )

    shoe9 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Diamond"',
    desc="The Nike SB Dunk Low 'Diamond' is a collaboration with Diamond Supply Co. It features a clean colorway with metallic silver accents and Diamond's signature logo on the tongue.",
    price=120,
    picture_aws_link='https://images.stockx.com/360/Nike-Dunk-SB-Low-Tiffany-Diamond/Images/Nike-Dunk-SB-Low-Tiffany-Diamond/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1666596335&h=384&q=57'
    )

    shoe10 = Items(
    owner_id=2,
    name='Nike SB Dunk Low "Freddy Krueger"',
    desc="The Nike SB Dunk Low 'Freddy Krueger' is a highly sought-after release inspired by the iconic horror film character. It showcases a blood-spattered design and details reminiscent of Freddy's glove.",
    price=120,
    picture_aws_link='https://images.stockx.com/images/Nike-Dunk-SB-Low-Freddy-Krueger.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1607045341&q=57'
    )






    db.session.add(shoe1)
    db.session.add(shoe2)
    db.session.add(shoe3)
    db.session.add(shoe4)
    db.session.add(shoe5)
    db.session.add(shoe6)
    db.session.add(shoe7)
    db.session.add(shoe8)
    db.session.add(shoe9)
    db.session.add(shoe10)
    db.session.commit()

def under_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM items"))

    db.session.commit()
