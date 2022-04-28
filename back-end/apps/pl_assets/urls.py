from django.urls import path
from .views import AssetAPIView

app_name = 'pl_assets'

urlpatterns = [
    path('assets/', AssetAPIView.as_view(), name='assets')
]
