from django.http import HttpResponse
from django.shortcuts import render,HttpResponse,redirect,get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login as auth_login
from django.shortcuts import render, get_object_or_404



def home(request):
    return render(request, 'index.html')