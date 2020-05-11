from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status, permissions
from rest_framework.response import Response
from . import models
from . import serializers

class OpViewset(viewsets.ModelViewSet):
    
    queryset = models.Op.objects.all()
    serializer_class = serializers.OpsSerializer
    filterset_fields = {'authors', 'title', 'id'}
 
class DraftViewset(viewsets.ModelViewSet):
    
    queryset = models.Draft.objects.all()
    serializer_class = serializers.DraftSerializer
    filterset_fields = {'ops'}
