# Generated by Django 5.1.3 on 2024-11-09 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_article_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='date_written',
            field=models.CharField(default='', max_length=200),
        ),
    ]
