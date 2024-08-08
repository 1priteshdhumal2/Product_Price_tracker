from django.apps import AppConfig
from .db import connect_db


class PriceTrackerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'price_tracker'

    def ready(self):
        connect_db()
