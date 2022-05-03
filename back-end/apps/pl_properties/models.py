from django.db import models
from pl_assets.models import AbstractAsset
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class AssetProperties(models.Model):
    asset = models.ForeignKey(AbstractAsset, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.SET_NULL, null=True)
    object_id = models.PositiveBigIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

class AssetDescription(models.Model):
    desc = models.CharField(max_length=1024, null=False, blank=False)