from rest_framework import serializers
from . import models

class AbstractAssetSerialize(serializers.ModelSerializer[models.AbstractAsset]):
    
    class Meta:
        model = models.AbstractAsset
        fields = '__all__'
    