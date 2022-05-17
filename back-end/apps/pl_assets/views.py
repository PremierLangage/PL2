from statistics import mode
from django.shortcuts import render
from pl_core.mixins import CrudViewSet
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from . import models, serializers
class AssetViewSet(CrudViewSet):
    
    lookup_field = 'pk'

    permission_classes = (AllowAny,)
    serializer_class = serializers.AssetSerialize

    def get_queryset(self):
        return models.Asset.objects.all()
