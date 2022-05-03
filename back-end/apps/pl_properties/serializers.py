from rest_framework import serializers
from .models import AssetDescription, AssetProperties

class AssetPropertiesSerializer(serializers.ModelSerializer[AssetProperties]):
    
    content_type = serializers.SerializerMethodField(method_name='content_type_validator')

    class Meta:
        model = AssetProperties
        fields = '__all__'
    
    def content_type_validator(self, object):
        print(type(object.content_type))
        return str(object.content_type)

class AssetDescriptionSerializer(serializers.ModelSerializer[AssetDescription]):

    class Meta:
        model = AssetDescription
        fields = '__all__'