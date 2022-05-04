
from django.urls import path
from . import views, enums

app_name = 'pl_properties'

urlpatterns = [
    
    path('properties/<int:asset_id>/', views.AssetPropertiesViewSet.as_asset_properties(), name='properties-detail'),
    path('properties/', views.AssetPropertiesViewSet.as_list(), name='properties-list'),

    path(f'properties/{enums.PropertiesTypes.DESCRIPTION.value}/', views.AssetDescriptionViewSet.as_list(), name=f'{enums.PropertiesTypes.DESCRIPTION.value}-list'),
    path(f'properties/{enums.PropertiesTypes.DESCRIPTION.value}/<int:id>/', views.AssetDescriptionViewSet.as_detail(), name=f'{enums.PropertiesTypes.DESCRIPTION.value}-detail'),
]
