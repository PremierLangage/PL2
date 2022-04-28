from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class AbstractAsset(models.Model):

    name = models.CharField(max_length=50, primary_key=True, blank=False)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_fermeture = models.DateField(blank=True)
    auteur = models.ForeignKey(get_user_model(), null=False, blank=False)
    path = models.CharField(max_length=1024, null=False, blank=False)

    def __str__(self):
        return self.name

class AssetBuilder(models.Mode):
    pass

class Exercice(AbstractAsset):
    pass

class Activity(AbstractAsset):
    pass

class Cours(AbstractAsset):
    pass

