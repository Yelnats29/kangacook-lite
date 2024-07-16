from django.shortcuts import render
from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

# /Recipes POST, GET
class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all().order_by('id') # tell django how to retrieve all objects from the DB, order by id ascending
    serializer_class = RecipeSerializer # tell django what serializer to use

# /Recipes/<id> GET, PUT, PATCH, DELETE
class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all().order_by('id')
    serializer_class = RecipeSerializer