from django.http import JsonResponse
from django.shortcuts import render
from typing import Any, Optional


from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from pl_auth.forms import SignInForm
from pl_user.serializers import UserSerializer 


# class RegistrationAPIView(APIView):
#     permission_classes = (AllowAny,)
#     renderer_classes = (UserJSONRenderer,)
#     serializer_class = RegistrationSerializer

#     def post(self, request: Request) -> Response:
#         """Return user response after a successful registration."""
#         user_request = request.data.get('user', {})
#         serializer = self.serializer_class(data=user_request)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)


class LoginAPIView(APIView):
    "View that handle sign in request."
    
    permission_classes = (AllowAny,)

    def post(self, request: Request) -> Response:
        """Return user after login."""
        form = SignInForm(request.data)
        if form.is_valid():
            user = authenticate(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password']
            )
            
            if user is None:
                print("NONE USER AFTER AUTHENTICATE")
                return Response(request, status=status.HTTP_400_BAD_REQUEST)
            print("before login", user)
            login(request, user)
            print("after login", user)
            serializer = UserSerializer(user, context={'request': request})
            print('SERIALIZER DATA', serializer.data)
            print('LOGIN SUCCESS', serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return JsonResponse(
            {
                'validation': form.errors,
                
                
            },
            status=status.HTTP_400_BAD_REQUEST
            )


class LogoutAPIView(APIView):

    permission_classes = (IsAuthenticated,)
    
    def post(self, request: Request):
        # logout session authentifications
        logout(request)

        # TODO blacklist current jwt token
        # https://django-rest-framework-simplejwt.readthedocs.io/en/latest/blacklist_app.html

        return Response({
            'detail': 'successfully logged out'
        }, status=status.HTTP_200_OK)
