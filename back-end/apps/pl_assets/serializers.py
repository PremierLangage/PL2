from rest_framework import serializers
from .models import AbstractAsset

class AbstractAssetSerialize(serializers.ModelSerializer[AbstractAsset]):
    
    class Meta:
        model = AbstractAsset
        fields = '__all__'
    
