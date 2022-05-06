from django.urls import path

from . import views

app_name = 'pl_auth'

urlpatterns = [
    path('user/', views.UserListView.as_view(), name='user-list'),
    path('user/<str:username>/', views.UserDetailView.as_view(), name='user-detail'),
]