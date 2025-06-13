from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .models import User


class UserCreateView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetUserView(APIView):
    def post(self, request):
        try:
            data = json.loads(request.body)
            wallet_address = data.get("wallet_address")

            if not wallet_address:
                return JsonResponse({"error": "wallet_address is required"}, status=400)

            user = User.objects.get(wallet_address=wallet_address)
            return JsonResponse(
                {
                    "name": user.name,
                    "username": user.username,
                    "wallet_address": user.wallet_address,
                    "user_type": user.user_type,
                }
            )
        except User.DoesNotExist:
            return Response("Not Found")
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
