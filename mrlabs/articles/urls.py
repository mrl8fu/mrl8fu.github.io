from django.urls import path
from . import views

urlpatterns = [
    path('article_list/', views.article_list, name='article_list'),
    path('article/<int:article_id>/', views.article_detail, name='article_detail'),
    path('about/', views.about, name='about'),
    path('', views.index, name='index'),
]
