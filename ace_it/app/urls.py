"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from tastypie.api import Api
from api.user_resources import UserResource
from api.chat_resources import ChatResource, MessageResource
from api.course_resources import CourseResource
from api.session_resources import SessionResource
from api.schedule_resources import ScheduleResource



v1_api = Api(api_name='v1')
v1_api.register(UserResource())
v1_api.register(CourseResource())
v1_api.register(ChatResource())
v1_api.register(MessageResource())
v1_api.register(SessionResource())
v1_api.register(ScheduleResource())


urlpatterns = [
    path('chat/', include('chat.urls')),
    path('admin/', admin.site.urls),
    url(r'^api/', include(v1_api.urls)),
]
