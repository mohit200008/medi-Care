from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('',index,name=''),
    path('DiseasePred/',index),
    path('hi/',index),
    path('Doctor/',index),
    path('Details/',index),
    path('health/',index),
    path('report/<str:type>',index),
]