from django.db import models
from pl_assets.models import AbstractAsset
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from rest_framework.reverse import reverse

from . import enums

class Properties(models.Model):

    class Meta:
        abstract = True

    def get_type(self) -> enums.PropertiesTypes:
        raise NotImplementedError

    def get_url(self, request, *args, **kwargs):
        return reverse(
            f'pl_properties:{self.get_type().value}-detail',
            request=request,
            kwargs=kwargs
        )

class AssetProperties(models.Model):
    asset = models.ForeignKey(AbstractAsset, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.SET_NULL, null=True)
    object_id = models.PositiveBigIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

class AssetDescription(Properties):
    desc = models.CharField(max_length=1024, null=False, blank=False)

    def get_type(self) -> enums.PropertiesTypes:
        return enums.PropertiesTypes.DESCRIPTION