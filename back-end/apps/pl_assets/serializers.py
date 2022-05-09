from rest_framework import serializers
from . import models
from pl_properties.models import AssetProperties
from pl_properties.serializers import PropertiesSerializer

class AssetSerialize(serializers.ModelSerializer[models.Asset]):
    
    properties = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = models.Asset
        fields = '__all__'
    
    def get_properties(self, value : models.Asset):
        queryset = AssetProperties.objects.filter(asset=value)
        properties = list()
        for asset in queryset:
            query = PropertiesSerializer(queryset=asset).to_representation(asset.property)
            properties.append(query)
        return properties
