from django.contrib.auth import get_user_model

User = get_user_model()

def set_user_details(request):
    data = {}
    data['user_id'] = request.user.id
    return data
