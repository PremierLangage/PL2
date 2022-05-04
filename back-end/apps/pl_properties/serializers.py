from rest_framework import serializers
from rest_framework.reverse import reverse
from . import models

class AssetDescriptionSerializer(serializers.ModelSerializer[models.AssetDescription]):

    class Meta:
        model = models.AssetDescription
        fields = '__all__'

class PropertiesSerializer(serializers.RelatedField):
    def to_representation(self, value):
        if isinstance(value, models.AssetDescription):
            return AssetDescriptionSerializer(value).data
        raise Exception('Unexpected type of tagged object')

class AssetPropertiesSerializer(serializers.ModelSerializer[models.AssetProperties]):
    
    asset_url = serializers.SerializerMethodField(read_only=True)
    property_url = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = models.AssetProperties
        fields = ['id', 'asset_url', 'asset', 'property_url', 'property_type', 'property_id']
    
    def get_asset_url(self, value : models.AssetProperties):
        request = self.context['request']
        return reverse(
            'pl_assets:asset-detail',
            request=request,
            kwargs={'pk' : value.asset.pk}
        )
    
    def get_property_url(self, value : models.AssetProperties):
        request = self.context['request']
        property = value.property
        return property.get_url(request=request, id = property.pk)  