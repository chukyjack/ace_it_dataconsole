from django.contrib.auth import get_user_model
from session.models import SessionUnit
User = get_user_model()


def set_user_details(request):
    data = {}
    data['token'] = 'demotoken'
    data['id'] = request.user.id
    data['username'] = request.user.username
    data['email'] = request.user.email
    data['first_name'] = request.user.first_name
    data['last_name'] = request.user.last_name
    data['address'] = request.user.userprofile.address
    data['city'] = 'N/a'
    data['zipcode'] = 00000
    data['country'] = 'N/a'
    data['personal_statement'] = request.user.userprofile.personal_statement
    data['role'] = request.user.userprofile.role if request.user.userprofile else 'staff'
    if request.user.userprofile.role == 'tutor':
        data['degree'] = 'University of X'
        data['title'] = 'Tutors title'
    request.session['user_details'] = data
    if request.user.userprofile.role == 'student':
        try:
            data['session_unit'] = float(request.user.session_unit.value)
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
