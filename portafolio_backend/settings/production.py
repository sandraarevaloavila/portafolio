from .base import *
import os
from pymongo import MongoClient

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = 'RENDER' not in os.environ

# https://docs.djangoproject.com/en/3.0/ref/settings/#allowed-hosts
ALLOWED_HOSTS = []

RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
"default": {
    "ENGINE": "djongo",
    "CLIENT": {
        "host": "mongodb+srv://admin:adminmongo@cluster0.cqcfkmf.mongodb.net/?retryWrites=true&w=majority",
        "username": "admin",
        "password": "adminmongo",
        "name": "portafolio",
        "authMechanism": "SCRAM-SHA-1",
    },
}}

SECRET_KEY = os.environ.get('SECRET_KEY',)

CORS_ALLOWED_ORIGINS = [
    
]


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

if not DEBUG:    # Tell Django to copy statics to the `staticfiles` directory
    # in your application directory on Render.
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
    # Turn on WhiteNoise storage backend that takes care of compressing static files
    # and creating unique names for each version so they can safely be cached forever.
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'