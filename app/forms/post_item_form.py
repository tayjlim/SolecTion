from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,FileField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed,FileRequired


class ItemForm(FlaskForm):
    name = StringField('name',validators=[DataRequired()])
    desc = StringField('desc', validators=[DataRequired()])
    price = IntegerField('price',validators=[DataRequired()])
    picture_aws_link = FileField('picture_aws_link', validators=[FileRequired(),FileAllowed(['png', 'jpeg', 'jpg'])])
