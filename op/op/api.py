from rest_framework import routers
from ops import views as myapp_views

router = routers.DefaultRouter()
router.register(r'op', myapp_views.OpViewset)
router.register(r'draft', myapp_views.DraftViewset)
