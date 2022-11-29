from rest_framework import serializers
from portafolio_backend.contac.models import mensajes

class mensajesSerializer(serializers.ModelSerializer):
    class Meta:
        model = mensajes
        fields = '__all__'

