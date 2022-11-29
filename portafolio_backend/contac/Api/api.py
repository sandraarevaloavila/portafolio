from rest_framework.views import APIView
from portafolio_backend.contac.Api.serializers import mensajesSerializer
from portafolio_backend.contac.models import mensajes
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST', 'GET'])
def contact_api_view(request):
    if request.method == 'GET':
        mjs = mensajes.objects.all()
        mensajes_serializer= mensajesSerializer(mjs, many= True)
        return Response (mensajes_serializer.data)
    
    if request.method == 'POST':
        mensajes_serializer= mensajesSerializer(data = request.data)
        if mensajes_serializer.is_valid():
            mensajes_serializer.save()
        return Response (mensajes_serializer.data)
    return  Response (mensajes_serializer.errors)