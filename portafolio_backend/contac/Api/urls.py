from django.urls import path
from portafolio_backend.contac.Api.api import contact_api_view

urlpatterns = [
    path('contac/', contact_api_view, name='contac')
]