from rest_framework.generics import ListCreateAPIView

from .models import Product
from .serializers import ProductSerializer


class ProductView(ListCreateAPIView):
    """Отображение продуктов"""

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
