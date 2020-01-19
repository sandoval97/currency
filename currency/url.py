from django.urls import path,include
from .api.router import router

app_name = 'currency'

urlpatterns = [
    path('',include(router.urls))
]