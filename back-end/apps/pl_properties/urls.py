
from django.urls import path
from . import views

app_name = 'pl_properties'

urlpatterns = [
    path('assets-properties', views.AssetPropertiesViewSet.as_list(), name='assets-properties'),
    path('assets-description', views.AssetDescriptionViewSet.as_list(), name='assets-description'),
]
