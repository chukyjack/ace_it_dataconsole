from datetime import datetime
from django.contrib import admin

# Register your models here.
from billing.models import Bill
from schedule.models import Schedule


class BillAdmin(admin.ModelAdmin):
    def render_change_form(self, request, context, *args, **kwargs):
        context['adminform'].form.fields['schedule'].queryset = Schedule.objects.filter(end_time__lt=datetime.now(), is_billed=False)
        return super(BillAdmin, self).render_change_form(request, context, *args, **kwargs)

admin.site.register(Bill, BillAdmin)
