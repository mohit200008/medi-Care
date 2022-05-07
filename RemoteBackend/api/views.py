from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse 
import numpy as np
import joblib
import os
from django.conf import settings 
import warnings

# Create your views here.

class MapReportView(APIView):
    def post(self,request,format=None):
        data = request.data
        report = {}
        objects = []
        for i in range(len(data['vals'])):
            obj = {}
            obj['me'] = data['vals'][i]
            obj['normal'] = data['defs'][i]
            obj['name'] = data['names'][i]
            objects.append(obj)
        report['prediction'] = data['pred']
        report['objects'] = objects
        return Response(report,status=status.HTTP_200_OK)

class HeartPredictionView(APIView):
    def post(self,request,format=None):
        to_predict_list = request.data
        to_predict_list = list(map(float, to_predict_list))
        report = to_predict_list
        if len(to_predict_list)==7 :
            to_predict = np.array(to_predict_list).reshape(1,7)
            result=0
            # Reaching the models file directory 
            models_folder = settings.BASE_DIR / 'ml_models'
            file_path = os.path.join(models_folder,os.path.basename("heart_model.pkl"))
            # Loading the model 
            with warnings.catch_warnings():
                warnings.simplefilter("ignore", category=UserWarning)
                loaded_model = joblib.load(open(file_path, "rb"))
            result = loaded_model.predict(to_predict)
            if int(result)==1:
                prediction = "Sorry you have high chances of getting a heart disease. Please consult a doctor immediately"
            else:
                prediction = "No need to fear. You have no dangerous symptoms for getting a heart disease"
            return Response({"prediction":prediction,"report":report},status=status.HTTP_200_OK)
        return Response({"Error":"Not enough values to predict!",'report':report})

class KidneyPredictionView(APIView):
    def post(self,request,format=None):
        to_predict_list = request.data
        print("here")
        to_predict_list = list(map(float, to_predict_list))
        report = to_predict_list
        if len(to_predict_list)==7 :
            to_predict = np.array(to_predict_list).reshape(1,7)
            result=0
            # Reaching the models file directory 
            models_folder = settings.BASE_DIR / 'ml_models'
            file_path = os.path.join(models_folder,os.path.basename("kidney_model.pkl"))
            # Loading the model 
            with warnings.catch_warnings():
                warnings.simplefilter("ignore", category=UserWarning)
                loaded_model = joblib.load(open(file_path, "rb"))
            result = loaded_model.predict(to_predict)
            if int(result)==1:
                prediction = "Sorry you have high chances of getting a Kidney disease. Please consult a doctor immediately"
            else:
                prediction = "No need to fear. You have no dangerous symptoms for getting a Kidney disease"
            return Response({"prediction":prediction,"report":report},status=status.HTTP_200_OK)
        return Response({"Error":"Not enough values to predict!"})

