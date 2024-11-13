from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from taggit.managers import TaggableManager

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextField()
    excerpt = models.TextField(max_length=300, blank=True, null=True)
    author = models.CharField(max_length = 200, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=False)
    date_written = models.CharField(max_length=200, default='')
    tags = TaggableManager()

    def __str__(self):
        return self.title
    
    def get_excerpt(self):
        # Generate an excerpt if it's not explicitly provided
        return self.excerpt or self.content[:150] + '...'
