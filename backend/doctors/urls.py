from django.urls import path

from doctors.views import DoctorView

urlpatterns = [
    path('', view=DoctorView.as_view())
]
