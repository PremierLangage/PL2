from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(('GET',))
def api_root(request, format=None):
    return Response({
        'auth-register': reverse('pl_auth:register', request=request, format=format),
        'auth-sign-in': reverse('pl_auth:login', request=request, format=format),
        'auth-sign-out': reverse('pl_auth:logout', request=request, format=format),
        'auth-user': reverse('pl_auth:user', request=request, format=format),
        'auth-token': reverse('pl_auth:token_obtain_pair', request=request, format=format),
        'auth-token-refresh': reverse('pl_auth:token_refresh', request=request, format=format),
    })
