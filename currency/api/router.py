from rest_framework.routers import SimpleRouter
from .viewsets import USDViewset,EURViewset

router = SimpleRouter()
router.register('usd',USDViewset)
router.register('eur',EURViewset)