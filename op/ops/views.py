from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers

class OpViewset(viewsets.ModelViewSet):
    queryset = models.Op.objects.all()
    serializer_class = serializers.OpsSerializer

class DraftViewset(viewsets.ModelViewSet):
    queryset = models.Op.objects.all()
    serializer_class = serializers.DraftSerializer

