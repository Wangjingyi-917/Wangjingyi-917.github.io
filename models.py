from app import db


class MouseLog(db.Model):

    __tablename__ = 'mouselog'

    id =  db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(28), nullable=False)
    timeMark = db.Column(db.Integer, nullable=False)
    objname = db.Column(db.String(100), nullable=False)
    action = db.Column(db.String(100), nullable=False)
    x =  db.Column(db.Integer, nullable=False)
    y =  db.Column(db.Integer, nullable=False)


    def __init__(self, username, timeMark, objname, action, x, y):
        self.username = username
        self.timeMark = timeMark
        self.objname = objname
        self.action = action
        self.x = x
        self.y = y

    def __repr__(self):
        return "{}{}{}{}{}{}{}".format(self.id, self.username, self.timeMark, self.objname, self.action, self.x, self.y)
