from django.conf import settings
from django.db import models
class GGH(models.Model):
    'Generated Model'
    sdf = models.CharField(max_length=250,)
    asaf = models.BigIntegerField(null=True,blank=True,)
    rel_ggh_1_1 = models.OneToOneField("home.GGH",blank=True,null=True,on_delete=models.CASCADE,related_name="ggh_rel_ggh_1_1",)
    rel_user_1_1 = models.OneToOneField("users.User",blank=True,null=True,on_delete=models.CASCADE,related_name="ggh_rel_user_1_1",)
    rel_user_1_n = models.ForeignKey("users.User",blank=True,null=True,on_delete=models.CASCADE,related_name="ggh_rel_user_1_n",)
class BBN(models.Model):
    'Generated Model'
    wef = models.BigIntegerField()
