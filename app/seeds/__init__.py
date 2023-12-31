from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import undo_items, under_items
from .reviews import tienkissesdudes_reviews, under_reviews

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        under_reviews()
        under_items()
        undo_users()

    seed_users()
    undo_items()
    tienkissesdudes_reviews()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    under_reviews()
    under_items()
    undo_users()

    # Add other undo functions here
