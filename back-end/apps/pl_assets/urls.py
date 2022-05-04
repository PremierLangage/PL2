from django.urls import path
from . import views

app_name = 'pl_assets'

urlpatterns = [
    path('asset/', views.AbstractAssetViewSet.as_list(), name='asset-list'),
    path('asset/<int:pk>/', views.AbstractAssetViewSet.as_detail(), name='asset-detail'),
]
