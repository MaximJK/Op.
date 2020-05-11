from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import OpViewset, DraftViewset
urlpatterns = [
    path('ops/', OpViewset.as_view({'get': 'list', 'post':'create', 'delete': 'destroy'}), name="ops"),
    path('drafts/', DraftViewset.as_view({'get': 'list'}), name="drafts"),
]