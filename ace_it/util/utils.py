from django.contrib.auth import get_user_model

User = get_user_model()

def set_user_details(request):
    data = {}
    data['token'] = 'demotoken'
    data['user_id'] = request.user.id
    data['username'] = request.user.username
    data['role'] = request.user.userprofile.role if request.user.userprofile else 'staff'
    return data
