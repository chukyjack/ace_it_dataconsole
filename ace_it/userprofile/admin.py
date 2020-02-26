from django.contrib import admin

from notification.models import NotificationPreference
from .models import UserProfile, RegisteredCourses

# Register your models here.

class RegisteredCoursesInline(admin.StackedInline):
    # fields = ('day','start_time','end_time')
    model = RegisteredCourses
    extra = 1

class NotificationPreferenceInline(admin.StackedInline):
    # fields = ('day','start_time','end_time')
    model = NotificationPreference

class UserProfileAdmin(admin.ModelAdmin):
    inlines = [RegisteredCoursesInline, NotificationPreferenceInline]
admin.site.register(UserProfile, UserProfileAdmin)
# admin.site.register(RegisteredCourses)
