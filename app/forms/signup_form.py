from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def is_email(form,field):
    email = field.data
    if len (email.split("@")) !=2:
        raise ValidationError('Not a valid email (missing or too many @ signs)')

def no_special_chars (form, field):
    user = field.data
    specialchars = '!@#$%^&*}()-"=_+,./<>?;:}\[{]'
    for char in specialchars:
        if char in user:
            raise ValidationError('No Special characters allowed!')

def six_chars (form, field):
    password = field.data
    if len (password) < 6:
        raise ValidationError("Password needs to be atleast 6 characters in length!")


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists,no_special_chars])
    email = StringField('email', validators=[DataRequired(),Email()])
    password = StringField('password', validators=[DataRequired(),six_chars])
