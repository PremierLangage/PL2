from django.db import models
from django.contrib.auth import get_user_model
from .enums import AssetType

class AbstractAsset(models.Model):

    type = models.CharField(max_length=20, choices=AssetType.choices)
    name = models.CharField(max_length=50, blank=False, null=False, unique=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_ouverture = models.DateField(blank=True)
    date_fermeture = models.DateField(blank=True)
    auteur = models.ForeignKey(get_user_model(), null=False, blank=False, on_delete=models.CASCADE)
    path = models.CharField(max_length=1024, null=False, blank=False)

    def __str__(self):
        return self.name

class ExerciceAsset(AbstractAsset):
    pass

class ActivityAsset(AbstractAsset):
    pass

class CoursAsset(AbstractAsset):
    pass


