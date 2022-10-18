from tkinter import CASCADE
from turtle import Turtle, title
from urllib import request
from django.db import models
from django.utils.html import format_html
from parler.models import TranslatableModel, TranslatedFields





class TestHistory(models.Model):
    RequestID = models.AutoField(primary_key=True)
    Title = models.CharField(max_length=200)
    SystemName = models.CharField(max_length=20)
    DocStatus = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    RequesterCode = models.CharField(max_length=10)
    RequestDate = models.DateTimeField(null=True)
    LastUpdate = models.DateTimeField(null=True, blank=True)
    
    class Meta:
       ordering = ('-RequestDate',)
        
    def __str__(self):
        return  f'{self.Title},{self.SystemName},{self.DocStatus},{self.Department},{self.RequesterCode},{self.RequestDate},{self.LastUpdate}'
    
class UrlSystemapi(models.Model):
    SystemID = models.AutoField(primary_key=True)
    NameSystemUrl = models.CharField(max_length=20)
    Url = models.URLField(max_length = 200 , null=True)
    
    def str (self):
        return f'{self.Url},{self.NameSystemUrl}'
    
# class urlSystem(models.Model):
#     urlSystemID = models.AutoField(primary_key=True)
#     urlGetData = models.CharField(max_length=150) 
#     name = models.CharField(max_length=100)
    
#     class Meta:
#         verbose_name_plural = 'System'

#     def __str__(self):
#         return self.name
    
    
# class testR1(models.Model):
#     name = models.CharField(max_length=100)
    
#     class Meta:
#         verbose_name_plural = 'testR1'

#     def __str__(self):
#         return self.name


# class testRequest(models.Model):
#     docNumber = models.CharField(max_length=200)
#     title = models.CharField(max_length=200)
#     department = models.CharField(max_length=100)
#     requester = models.CharField(max_length=10)
#     requestDate = models.DateTimeField(null=True, blank=True)
#     lastUpdate = models.DateTimeField(null=True, blank=True)
#     #system = models.ForeignKey(System, null=True, blank=True, on_delete=models.CASCADE)
#     docStatus = models.CharField(max_length=100)
#     attachment = models.BooleanField(default=False)
#     approver = models.CharField(max_length=10)
#     detailUrl = models.URLField(null=True, blank=True)
    
#     class Meta:
#         ordering = ['requestDate']
#         verbose_name_plural = 'testRequest'
        
#     def __str__(self):
#         return  f'{self.docNumber},{self.title},{self.department},{self.requester},{self.requestDate},{self.lastUpdate},{self.system},{self.docNumber},{self.attachment},{self.approver},{self.detailUrl}'
