from rest_framework import routers
from ops import views as myapp_views

router = routers.DefaultRouter()
router.register(r'friends', myapp_views.OpViewset)
router.register(r'belongings', myapp_views.DraftViewset)
