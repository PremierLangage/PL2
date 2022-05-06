import io
import pydenticon

from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.validators import validate_email as django_validate_email


def validate_email(value: str) -> tuple[bool, str]:
    """Validate a single email."""
    message_invalid = 'Enter a valid email address.'

    if not value:
        return False, message_invalid
    # Check the regex, using the validate_email from django.
    try:
        django_validate_email(value)
    except ValidationError:
        return False, message_invalid

    return True, ''

def avatar_path(instance, filename):
    print("AVATAR PATH", "avatar/" + filename + '.' + settings.IDENTICON_OPTIONS['output_format'])
    return "avatar/" + filename + '.' + settings.IDENTICON_OPTIONS['output_format']


def generate_identicon(user):
    p = settings.IDENTICON_OPTIONS
    generator = pydenticon.Generator(
        p['col'],
        p['row'],
        p['digest'],
        foreground=p['foreground'],
        background=p['background']
    )
    identicon = generator.generate(
        user.username,
        300,
        300,
        padding=p['padding'],
        output_format=p['output_format']
    )
    return io.BytesIO(identicon)