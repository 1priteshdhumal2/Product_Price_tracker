from mongoengine import connect

def connect_db():
    connect(
        db = 'price_tracker_db',
        host = 'localhost',
        port = 27017
    )