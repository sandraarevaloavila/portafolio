from rest_framework import serializers
from contac.models import mensajes

class mensajesserializer(serializers.ModelSerializer):
    class meta:
        model = mensajes
        fields = '_all_'

