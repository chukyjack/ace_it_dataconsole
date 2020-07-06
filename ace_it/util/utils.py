from django.contrib.auth import get_user_model
from session.models import SessionUnit
from userprofile.models import UserProfile
User = get_user_model()


def set_user_details(request):
    data = {}
    user = request.user

    try:
        user_profile = user.userprofile
    except UserProfile.DoesNotExist:
        user_profile = UserProfile.objects.create(user=user)

    user.refresh_from_db()
    data['token'] = 'demotoken'
    data['id'] = user.id
    data['username'] = user.username
    data['email'] = user.email
    data['first_name'] = user.first_name
    data['last_name'] = user.last_name
    data['address'] = user_profile.address
    data['city'] = 'N/a'
    data['zipcode'] = 00000
    data['country'] = 'N/a'
    data['personal_statement'] = user_profile.personal_statement
    data['role'] = user_profile.role if user_profile else 'staff'
    if user_profile.role == 'tutor':
        data['degree'] = 'University of X'
        data['title'] = 'Tutors title'
    request.session['user_details'] = data
    if user_profile.role == 'student':
        try:
            data['session_unit'] = float(user.session_unit.value)
        except SessionUnit.DoesNotExist:
            data['session_unit'] = 0
    return data


def get_user_details(request):
    return request.session.get('user_details')

def convert_time_to_string(time):
    return time.strftime("%d %b, %I:%M%p")

def convert_time_to_string(time):
    return time.strftime("%d %b, %Y  %I:%M%p")

def convert_time_to_date_string(time):
    return time.strftime("%d %b, %Y ")

def send_email_to_user(user):
    print('Sending email............')
    return
