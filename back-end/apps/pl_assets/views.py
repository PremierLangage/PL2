from statistics import mode
from django.shortcuts import render
from pl_core.mixins import CrudViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from . import models, serializers
class AbstractAssetViewSet(CrudViewSet):
    
    permission_classes = (AllowAny,)
    serializer_class = serializers.AbstractAssetSerialize

    def get_queryset(self):
        return models.AbstractAsset.objects.all()
