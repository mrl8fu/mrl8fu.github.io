from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Article

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'published')
    search_fields = ('title', 'content')
    list_filter = ('published', 'created_at')
    ordering = ('-created_at',)
