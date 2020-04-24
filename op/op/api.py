from rest_framework import routers
from ops import views as myapp_views
from authentication import views as myauth_views

router = routers.DefaultRouter()
router.register(r'ops', myapp_views.OpViewset)
router.register(r'drafts', myapp_views.DraftViewset)
router.register(r'users', myauth_views.CustomUserViewset)