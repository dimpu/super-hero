from peewee import *

db = SqliteDatabase('heros.db')

class HeroLink(Model): 
    name = CharField()
    url = CharField()
    class Meta:
        database = db # This model uses the "people.db" database.

class SuperHero(Model):
    name = CharField()
    real_name = CharField()
    height = CharField()
    weight = CharField()
    powers = CharField()
    city = CharField()
    sponser = CharField()
    gender = CharField()
    race = CharField()
    eye_color = CharField()
    hair_color = CharField()
    occupation = CharField()
    picture = CharField()
    powers = CharField()

    class Meta:
        database = db # This model uses the "people.db" database.

db.connect()
db.create_tables([SuperHero, HeroLink], safe=True)
