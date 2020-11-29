from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status, permissions
from rest_framework.response import Response
from . import models
from . import serializers

class OpViewset(viewsets.ModelViewSet):    
    queryset = models.Op.objects.all();
    serializer_class = serializers.OpsSerializer;
    filterset_fields = {'authors', 'title', 'id'};
    def patch(self, request, pk):
        testmodel_object = self.get_object(pk)
        serializer = TestModelSerializer(testmodel_object, data=request.data, partial=True) # set partial=True to update a data partially
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(code=201, data=serializer.data)
        return JsonResponse(code=400, data="wrong parameters")
 
class DraftViewset(viewsets.ModelViewSet):
    
    queryset = models.Draft.objects.all()
    serializer_class = serializers.DraftSerializer
    filterset_fields = {'op',}

class CommentViewset(viewsets.ModelViewSet):

        queryset = models.Comment.objects.all()
        serializer_class = serializers.CommentSerializer
        filterset_fields = {'id', 'body', 'drafts' }
