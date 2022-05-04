from rest_framework import serializers
from . import models

class AssetSerialize(serializers.ModelSerializer[models.Asset]):
    
    class Meta:
        model = models.Asset
        fields = '__all__'
    