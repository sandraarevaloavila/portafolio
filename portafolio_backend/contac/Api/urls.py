from django.urls import path
from portafolio_backend.contac.Api.api import contact_api_view

urlpatterns = [
    path('contact/', contact_api_view, name='contact')
]