# -*- coding: utf-8 -*-
import flask
from flask import Flask, render_template
from flask_static import FlaskStatic
#from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__) # create app
app.config.from_object('config.DevelopmentConfig') # define server
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
static = FlaskStatic(app)
#db = SQLAlchemy(app) # connect database

#from models import *

@app.route('/', methods=['GET'])
def home():
    return app.send_static_file("index.html")

@app.route('/design-projects/', methods=['GET'])
def de_projects():
    return render_template("design-projects.html")

@app.route('/research-projects/', methods=['GET'])
def re_projects():
    return render_template("research-projects.html")

@app.route('/members/', methods=['GET'])
def members():
    return render_template("members.html")

@app.route('/project1/', methods=['GET'])
def project1():
    return render_template("project1.html")

@app.route('/project2/', methods=['GET'])
def project2():
    return render_template("project2.html")
    

if __name__ == '__main__':
    app.run()
