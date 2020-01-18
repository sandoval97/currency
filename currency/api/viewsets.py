from ..models import Currency
from rest_framework.viewsets import ModelViewSet
from .serializer import CurrencySerializer

class USDViewset(ModelViewSet):
    queryset = Currency.objects.filter(symbol='USD')
    serializer_class = CurrencySerializer
    http_method_names = ['get']
    model = Currency

class EURViewset(ModelViewSet):
    queryset = Currency.objects.filter(symbol='EUR')
    serializer_class = CurrencySerializer
    http_method_names = ['get']
    model = Currency