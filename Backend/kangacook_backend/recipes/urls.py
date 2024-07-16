from django.urls import path
from .views import RecipeList, RecipeDetail

urlpatterns = [
    path('recipes/', RecipeList.as_view(), name='recipe-list'), # recipes/ will be routed to the RecipeList view for handling
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'), # recipes/<int:pk>/ will be routed to the RecipeDetail view for handling
]