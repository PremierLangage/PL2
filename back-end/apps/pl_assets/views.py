from django.shortcuts import render
from pl_core.mixins import CrudViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class AssetAPIView(APIView):
    
    permission_classes = (IsAuthenticated,)