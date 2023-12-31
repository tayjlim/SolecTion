from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,FileField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed,FileRequired

class ReviewForm(FlaskForm):
    desc = StringField('desc')
    picture_aws_link= FileField('cover_picture', validators=[FileRequired(),FileAllowed(['png', 'jpeg', 'jpg'])])
    