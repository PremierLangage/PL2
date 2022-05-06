import uuid

from typing import Optional
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.files import File
from django.db import models
from rest_framework_simplejwt.tokens import RefreshToken

from .utils import avatar_path, generate_identicon


class UserManager(BaseUserManager):  # type: ignore

    # type: ignore
    def create_user(self, username: str, email: str, password: Optional[str] = None) -> 'User':
        """Create and return a `User` with an email, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')

        if email is None:
            raise TypeError('Users must have an email address.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username: str, email: str, password: str) -> 'User':  # type: ignore
        """Create and return a `User` with superuser (admin) permissions."""
        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_editor = True
        user.is_active = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True)
    is_editor = models.BooleanField('Editor', default=False)
    avatar = models.ImageField(upload_to=avatar_path, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    bio = models.TextField(null=True)
    first_name = models.CharField(max_length=20000, null=True)
    last_name = models.CharField(max_length=20000, null=True)
    birth_date = models.DateField(null=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']


    # Tells Django that the UserManager class defined above should manage
    # objects of this type.
    objects = UserManager()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # if self.pk and not self.avatar:
        # self.avatar.save(self.username, File(generate_identicon(self)))

    def __str__(self) -> str:
        """Return a string representation of this `User`."""
        string = self.email if self.email != '' else self.get_full_name()
        return f'{self.id} {string}'

    @property
    def tokens(self) -> dict[str, str]:
        """Allow us to get a user's token by calling `user.token`."""
        refresh = RefreshToken.for_user(self)
        return {'refresh': str(refresh), 'access': str(refresh.access_token)}

    @property
    def is_admin(self):
        """
        Returns whether the user is an administrator
        """
        return self.is_superuser or self.is_staff

    def get_full_name(self) -> Optional[str]:
        """Return the full name of the user."""
        return self.full_name

    def get_short_name(self) -> str:
        """Return user username."""
        return self.username
