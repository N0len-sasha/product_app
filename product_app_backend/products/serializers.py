from rest_framework import serializers
from django.core.exceptions import ValidationError

from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    """Отображение данных продукта"""

    class Meta:
        model = Product
        fields = '__all__'

    def validate(self, data):
        if data['price'] < 0:
            raise ValidationError(
                'Цена должна быть неотрицательной'
            )
        return data
