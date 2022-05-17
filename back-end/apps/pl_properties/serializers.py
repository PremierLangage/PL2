from urllib import request
from rest_framework import serializers
from rest_framework.reverse import reverse
from . import models

class AssetPropertiesSerializer(serializers.ModelSerializer[models.AssetProperties]):
    
    asset_url = serializers.SerializerMethodField(read_only=True)
    property_url = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = models.AssetProperties
        fields = ['id', 'asset_url', 'property_url', 'asset', 'content_type', 'object_id']
    
    def get_asset_url(self, value : models.AssetProperties):
        request = self.context['request']
        return reverse(
            'pl_assets:asset-detail',
            request=request,
            kwargs={'pk' : value.asset.pk}
        )
    
    def get_property_url(self, value : models.AssetProperties):
        request = self.context['request']
        return value.content_object.get_url(request=request, id = value.content_object.pk)
        

class AssetDescriptionSerializer(serializers.ModelSerializer[models.AssetDescription]):

    class Meta:
        model = models.AssetDescription
        fields = '__all__'