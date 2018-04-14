# from flask import Flask
# app = Flask(__name__)

# @app.route("/")
# def hello():
#     return "Hello World!"

from db import Person
from playhouse.shortcuts import model_to_dict, dict_to_model

user_obj = Person.select()
json_data = json.dumps(model_to_dict(user_obj))