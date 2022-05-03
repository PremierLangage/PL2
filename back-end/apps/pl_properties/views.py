from rest_framework.permissions import AllowAny
from pl_core.mixins import CrudViewSet
from . import models, serializers

class AssetPropertiesViewSet(CrudViewSet):

    permission_classes = (AllowAny,)
    serializer_class = serializers.AssetPropertiesSerializer

    def get_queryset(self):
        return models.AssetProperties.objects.all()

class AssetDescriptionViewSet(CrudViewSet):

    permission_classes = (AllowAny,)
    serializer_class = serializers.AssetDescriptionSerializer

    def get_queryset(self):
        return models.AssetDescription.objects.all()

