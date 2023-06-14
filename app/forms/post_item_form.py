from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,FileField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed,FileRequired


class ItemForm(FlaskForm):
    name = StringField('name',validators=[DataRequired()])
    desc = StringField('description', validators=[DataRequired()])
    price = IntegerField('price',validators=[DataRequired()])
    # cover_picture= FileField('cover_picture', validators=[FileRequired(),FileAllowed(['png', 'jpeg', 'jpg'])])
    cover_picture_link_test = StringField('cover_picture_link_test', validators=[DataRequired()])
