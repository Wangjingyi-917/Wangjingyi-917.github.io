from app import db
from models import MouseLog

db.drop_all()
db.create_all()