from django.test import TestCase
from.models import User


class PLAuthTest(TestCase):
    
    def setUp(self):
            self.pascal = User.objects.create_user('pascal', 'pascal@test.com', 'pascal')
            self.john = User.objects.create_user('john', 'john@test.com', 'john')
            self.jimmi = User.objects.create_user('jimmi', 'jimmi@test.com', 'jimmi')
            self.gaston = User.objects.create_user('gaston', 'gaston@test.com', 'gaston')

    def test_simple_authentication_sucess(self):
        self.assertEquals(self.client.login(username='pascal', password='pascal'), True)
        self.client.logout()
        
    def test_simple_authentication_failure(self):
        self.assertEquals(self.client.login(username='john', password='pascal'), False)
        self.client.logout()
        
    
        

        