from rest_framework import serializers
from .models import AssetDescription, AssetProperties

class AssetPropertiesSerializer(serializers.ModelSerializer[AssetProperties]):
    
    class Meta:
        model = AssetProperties
        fields = '__all__'

class AssetDescriptionSerializer(serializers.ModelSerializer[AssetDescription]):

    class Meta:
        model = AssetDescription
        fields = '__all__'