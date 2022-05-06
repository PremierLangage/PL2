from django.test import TestCase

# Create your tests here.
from django.contrib.auth import get_user_model
from django.test import TestCase

User = get_user_model()


class ModelsTestCase(TestCase):
    """ Test functions of pl_users.models modules. """

    @classmethod
    def setUpTestData(cls):
        User.objects.create_user(username='user', password='12345', email="fake1@fake.com")
        admin: User = User.objects.create_user(username='admin', password='adminadmin', email="fake2@fake.com")
        admin.is_staff = True
        admin.is_editor = True

    def test_is_admin(self):
        user = User.objects.get(username='user')
        user.is_staff = False
        user.is_superuser = False
        self.assertFalse(user.is_admin)

        user.is_staff = True
        self.assertTrue(user.is_admin)

        user.is_staff = False
        user.is_superuser = True
        self.assertTrue(user.is_admin)
