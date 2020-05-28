from rest_framework import serializers
from . import models


class DraftSerializer(serializers.ModelSerializer):
    class  Meta:
        model = models.Draft
        fields = ('id', 'op', 'body', 'notes', 'version_num', 'is_final', )
class OpsSerializer(serializers.ModelSerializer):
    draft = DraftSerializer(many=True, read_only=True, required=None, allow_null=True, )
    class Meta:
        model = models.Op
        fields = ('id', 'authors', 'title', 'medium', 'description', 'is_public','draft')
    