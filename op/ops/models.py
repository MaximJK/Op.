from django.db import models
from authentication import models as user_models

# Create your models here.
class Op(models.Model):
    authors = models.ForeignKey(
        user_models.CustomUser, 
        on_delete=models.CASCADE,
        null=True, blank=True, default=None)
    medium = models.TextField(max_length=30)
    title = models.TextField(max_length=30)
    description = models.TextField(max_length=120)
    is_public = models.BooleanField(null=False, default=False)

class Draft(models.Model):
    op = models.ForeignKey(
        'Op', on_delete=models.CASCADE,
        related_name="draft",
        null=True, blank=True, default=None
    )
    body = models.TextField(default='-')
    notes = models.TextField(default='-')
    version_num = models.IntegerField()
    is_final = models.BooleanField(null=False, default=False)
