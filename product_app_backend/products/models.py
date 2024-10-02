from django.db import models
from .constants import MAX_TEXT_LENGTH, MAX_CHAR_LENGTH


class Product (models.Model):

    name = models.CharField(max_length=MAX_CHAR_LENGTH,
                            verbose_name='Продукт')
    description = models.TextField(max_length=MAX_TEXT_LENGTH,
                                   verbose_name='Описание')
    price = models.FloatField(verbose_name='Цена')

    class Meta:
        verbose_name = 'Продукт',
        verbose_name_plural = 'Продукты'

    def __str__(self) -> str:
        return self.name