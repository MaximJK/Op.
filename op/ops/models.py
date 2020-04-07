from django.db import models

# Create your models here.
class Op(models.Model):
    authors = models.ForeignKey(
        'CustomUser', 
        on_delete=models.CASCADE,)
    body = models.TextField()
    title = models.TextField(max_length=30)
    public = models.BooleanField(null=False, default=False)

class Draft(models.Model):
    Ops = models.ForeignKey(
        'Op', on_delete=models.CASCADE,
    )
    body = models.TextField()
    version = models.IntegerField
