from dataclasses import fields
from rest_framework import serializers
from doctors.models import Doctor

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'
