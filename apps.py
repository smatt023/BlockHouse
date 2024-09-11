from django.apps import AppConfig


class ChartsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'charts'

INSTALLED_APPS = [
    # Other Django apps
    'charts',
    'rest_framework',  # Add this as well for Django REST framework
]