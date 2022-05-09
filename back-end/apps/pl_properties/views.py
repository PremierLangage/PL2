from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import serializers
from pl_core.mixins import CrudViewSet
from pl_assets.models import Asset
from .serializers import AssetPropertiesSerializer, AssetDescriptionSerializer
from .models import Asset, AssetProperties, AssetDescription

class AssetPropertiesViewSet(CrudViewSet):

    lookup_field = 'asset_id'

    permission_classes = (AllowAny,)
    serializer_class = AssetPropertiesSerializer

    def get_queryset(self):
        return AssetProperties.objects.all()

    def get_asset_properties(self, request, *args, **kwargs):
        query = AssetProperties.objects.filter(asset_id=kwargs['asset_id'])
        serializer = AssetPropertiesSerializer(query, many=True)
        return Response(serializer.data)
    
    def create_asset_properties(self, request, *args, **kwargs):
        asset = Asset.objects.get(pk=kwargs['asset_id'])

    @classmethod
    def as_asset_properties(cls):
        return cls.as_view({'get' : 'get_asset_properties'})

class AssetDescriptionViewSet(CrudViewSet):

    lookup_field = 'id'

    permission_classes = (AllowAny,)
    serializer_class = AssetDescriptionSerializer

    def get_queryset(self):
        return AssetDescription.objects.all()

    def post_create(self, request, *args, **kwargs):
        pass

    @classmethod
    def as_create(cls):
        return cls.as_view({'post' : 'post_create'})

