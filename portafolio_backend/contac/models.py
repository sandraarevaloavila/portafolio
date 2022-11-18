from django.db import models

class mensajes(models.Model):
    nombre=models.CharField(max_length=50)
    correo=models.EmailField(max_length=100, blank=False, null=False)
    mensaje=models.TextField()

def __str__(self):
        return self.nombre
