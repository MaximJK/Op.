from rest_framework import routers
from ops import views as ops_views
from authentication import views as myauth_views


router = routers.DefaultRouter()
router.register(r'ops', ops_views.OpViewset)
router.register(r'draft', ops_views.DraftViewset)
# router.register(r)