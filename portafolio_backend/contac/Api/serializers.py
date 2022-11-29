from rest_framework import serializers
from contac.models import mensajes

class mensajesSerializer(serializers.ModelSerializer):
    class meta:
        model = mensajes
        fields = '__all__'

