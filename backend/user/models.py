from django.db import models


class User(models.Model):
    USER_TYPE_CHOICES = [
        ("provider", "Provider"),
        ("consumer", "Consumer"),
    ]
    name = models.CharField(max_length=150)
    username = models.CharField(max_length=150, primary_key=True)
    wallet_address = models.CharField(max_length=255, unique=True)
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES)

    def __str__(self):
        return self.username

    class Meta:
        db_table = "users"
