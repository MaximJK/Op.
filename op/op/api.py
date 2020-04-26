from rest_framework import routers
from ops import views as myapp_views
from authentication import views as myauth_views

router = routers.DefaultRouter()
router.register(r'op', myapp_views.OpViewset)
router.register(r'draft', myapp_views.DraftViewset)
router.register(r'user', myauth_views.CustomUserViewset)