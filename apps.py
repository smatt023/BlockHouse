#back end 
from django.apps import AppConfig


# This class is used to configure the 'charts' app within the Django project.
# It defines app-specific configurations, such as the default type of primary key for models
class ChartsConfig(AppConfig):
    # Specifies the default primary key field type for models in this app.
    # 'BigAutoField' automatically generates a unique ID for each model instance.
    default_auto_field = 'django.db.models.BigAutoField'
    
    # The name of the app, which should correspond to the app folder name.
    name = 'charts'


# In the settings.py file, you register your installed apps. The 'charts' app
# and 'rest_framework' (for using Django REST Framework) need to be added.
INSTALLED_APPS = [
    # Other Django apps

    # Registers the 'charts' app to be part of this Django project
    'charts',

    # Registers the Django REST framework, which is used for building APIs
    'rest_framework',  # Add this as well for Django REST framework
]
