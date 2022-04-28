from django.urls import path
from .views import AbstractAssetViewSet

app_name = 'pl_assets'

urlpatterns = [
    path('assets/', AbstractAssetViewSet.as_list(), name='assets')
]
