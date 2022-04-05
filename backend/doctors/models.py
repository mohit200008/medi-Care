from django.db import models

# Create your models here.
class Doctor(models.Model):
    SPEC_CHOICES = [
        ('dermatologist', 'dermatologist'),
        ('psychiatrist', 'psychiatrist'),
        ('neurologist', 'neurologist'),
        ('physician', 'physician')
    ]
    
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    specialization = models.CharField(max_length=20, choices=SPEC_CHOICES)
    experience = models.IntegerField()
    review = models.TextField(max_length=1000)
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
