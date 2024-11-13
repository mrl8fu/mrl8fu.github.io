from django.shortcuts import render, get_object_or_404
from .models import Article
from taggit.models import Tag

# Create your views here.

articles = Article.objects.filter(published=True).order_by('-created_at')
def article_list(request):
    all_tags = Tag.objects.all    
    return render(request, 'articles/article_list.html', {'articles': articles, 'all_tags': all_tags})

def article_detail(request, article_id):
    article = get_object_or_404(Article, pk=article_id)
    return render(request, 'articles/article_detail.html', {'article': article, 'articles': articles})

def about(request):
    return render(request, 'articles/about.html')

def index(request):
    latest_articles = articles[:3]
    return render(request, 'articles/index.html', {'articles': latest_articles})