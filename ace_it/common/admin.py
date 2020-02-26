from django.contrib import admin
from .models import PreferredAvailability, StudentsAvailability
# Register your models here.


# class PreferredAvailabilityAdmin(admin.ModelAdmin):
#     readonly_fields = ['day', 'start_time', 'end_time']


admin.site.register(StudentsAvailability)
# admin.site.register(PreferredAvailability, PreferredAvailabilityAdmin)
