from rest_framework import serializers
from . import models

class OpsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Op
        fields = ('authors', 'title', 'is_public')

class DraftSerializer(serializers.ModelSerializer):
    class  Meta:
        model = models.Draft
        fields = ('ops', 'body', 'medium', 'version_num', 'is_final')