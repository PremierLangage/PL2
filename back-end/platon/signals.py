from django.dispatch import Signal

create_defaults = Signal(providing_args=["config"])
