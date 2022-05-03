from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework import status


User = get_user_model()
class AuthTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.pascal = User.objects.create_user(
            'pascal', 'pascal@test.com', 'pascal')
        cls.john = User.objects.create_user('john', 'john@test.com', 'john')
        cls.jimmi = User.objects.create_user(
            'jimmi', 'jimmi@test.com', 'jimmi')
        cls.gaston = User.objects.create_user(
            'gaston', 'gaston@test.com', 'gaston')

    # SIMPLE SESSIONS TESTS

    def test_simple_authentication_sucess(self):
        
        self.assertEquals(self.client.login(
            username='pascal', password='pascal'), True)
        self.client.logout()

    def test_simple_authentication_failure(self):
        self.assertEquals(self.client.login(
            username='john', password='pascal'), False)
        self.client.logout()
        
    # JWT TESTS
    
    def test_jwt_authentication_without_any_identifiers(self):
        login_response = self.client.post('/api/v1/auth/login/', {})
        self.assertEqual(login_response.status_code, status.HTTP_400_BAD_REQUEST)
    
    def test_jwt_authentication_success(self):
        login_response = self.client.post('/api/v1/auth/login/', {'username': 'pascal', 'password': 'pascal'})
        self.assertEqual(login_response.status_code, status.HTTP_200_OK)
        
    def test_jwt_authentication_failure(self):
        login_response = self.client.post('/api/v1/auth/login/', {'username': 'pascal', 'password': 'jaguar'})
        self.assertEqual(login_response.status_code, status.HTTP_401_UNAUTHORIZED)
    
    def test_jwt_logout_unauthenticate(self):
        logout_response = self.client.post('/api/v1/auth/logout/')
        self.assertEqual(logout_response.status_code, status.HTTP_401_UNAUTHORIZED)
    
    def test_jwt_logout_authenticate(self):
        login_response = self.client.post('/api/v1/auth/login/', {'username': 'pascal', 'password': 'pascal'})
        logout_response = self.client.post('/api/v1/auth/logout/')

