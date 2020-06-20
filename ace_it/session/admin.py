from django.contrib import admin
from session.models import Session, SessionInterest, SessionContract, GigFile, Gig, SessionUnit
from common.models import PreferredAvailability, StudentsAvailability
# Register your models here.


class PreferredAvailabilityInline(admin.StackedInline):
    # fields = ('day','start_time','end_time')
    model = PreferredAvailability
    readonly_fields = ['day', 'start_time', 'end_time']
    extra = 1


class StudentsAvailabilityInline(admin.StackedInline):
    # fields = ('day','start_time','end_time')
    model = StudentsAvailability
    extra = 1


# @admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    inlines = [StudentsAvailabilityInline]


class SessionInterestAdmin(admin.ModelAdmin):
    inlines = [PreferredAvailabilityInline]


admin.site.register(Session, SessionAdmin)
admin.site.register(SessionContract)
admin.site.register(SessionInterest, SessionInterestAdmin)


class GigFileInline(admin.StackedInline):
    # fields = ('day','start_time','end_time')
    model = GigFile
    # readonly_fields = ['day', 'start_time', 'end_time']
    extra = 1


class GigAdmin(admin.ModelAdmin):
    inlines = [GigFileInline]


admin.site.register(Gig, GigAdmin)

admin.site.register(SessionUnit)
