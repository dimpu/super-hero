from flask import Flask
from flask_peewee.rest import RestAPI
from db import Person

app = Flask(__name__)
app.config.from_object(__name__)


# create a RestAPI container
api = RestAPI(app)

# register the Note model
api.register(Person)

api.setup()



if __name__ == '__main__':
    app.run()


