from rest_framework import serializers
from . import models


class DraftSerializer(serializers.ModelSerializer):
    class  Meta:
        model = models.Draft
        fields = ('id', 'ops', 'body', 'medium', 'version_num', 'is_final')
class OpsSerializer(serializers.ModelSerializer):
    draft = DraftSerializer(many=True)
    class Meta:
        
        model = models.Op
        fields = ('id', 'authors', 'title', 'is_public','draft')
