from django.db import models
from pl_assets.models import AbstractAsset
from pl_assets.enums import AssetType

class AbstractProperties(models.Model):
    name = models.CharField(max_length=50, primary_key=True, blank=False)

    def get_compatiblity(self, asset: AssetType) -> bool:
        return False
    
class AssetProperties(models.Model):
    asset = models.ForeignKey(AbstractAsset, on_delete=models.CASCADE)
    property = models.ForeignKey(AbstractProperties, on_delete=models.CASCADE)

class Description(AbstractProperties):
    desc = models.CharField(max_length=1024, null=False)

    def get_compatiblity(self, asset: AssetType) -> bool:
        return True

class Notation(AbstractProperties):
    note = models.IntegerField()

    def get_compatiblity(self, asset : AssetType) -> bool:
        if asset == AssetType.EXERCICE:
            return True
        return False