from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from doctors.models import Doctor
from doctors.serializers import DoctorSerializer

# Create your views here.
class DoctorView(APIView):
    def get(self, request):
        doc_spec= request.query_params.get('specialization')
        doctors: list[Doctor]
        if doc_spec:
            doctors = Doctor.objects.filter(specialization__icontains=doc_spec)
        else: 
            doctors = Doctor.objects.all()
        doctorSerializer = DoctorSerializer(doctors, many=True)
        return Response(data=doctorSerializer.data, status=status.HTTP_200_OK)
    
    
    def post(self, request):
        doctorSerializer = DoctorSerializer(data=request.data)
        if doctorSerializer.is_valid():
            doctorSerializer.save()
            return Response(data=doctorSerializer.data, status=status.HTTP_201_CREATED)
        return Response(data=doctorSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
