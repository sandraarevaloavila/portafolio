from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []
# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'portafolio',
        'CLIENT': {
            'host': 'localhost',
            'port': 27017,
            'username': 'superadmin',
            'password': "admin1234",
            'authSource': 'portafolio',
            'authMechanism': 'SCRAM-SHA-1',
        }
    }
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'