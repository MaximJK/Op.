from django.db import models
from authentication import models as user_models

# Create your models here.
class Op(models.Model):
    authors = models.ForeignKey(
        user_models.CustomUser, 
        on_delete=models.CASCADE,)
    body = models.TextField()
    title = models.TextField(max_length=30)
    is_public = models.BooleanField(null=False, default=False)

class Draft(models.Model):
    Ops = models.ForeignKey(
        'Op', on_delete=models.CASCADE,
    )
    body = models.TextField()
    version_num = models.IntegerField
    is_final = models.BooleanField(null=False, default=False)
