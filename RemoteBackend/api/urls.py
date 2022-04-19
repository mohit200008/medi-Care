from django.urls import path
from .views import *

app_name = 'api'

urlpatterns = [
    path("heart-pred/",HeartPredictionView.as_view()),
    path("kidney-pred/",KidneyPredictionView.as_view()),
    path("map-report/",MapReportView.as_view()),
]