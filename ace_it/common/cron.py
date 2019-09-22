from django_cron import CronJobBase, Schedule

from course.models import Course



class MyCronJob(CronJobBase):
    RUN_EVERY_MINS = 1 # every 1 minute

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'common.cron.MyCronJob'    # a unique code

    def do(self):
        print('Howdy cron is running')
        Course.objects.create(name='first course today', level=112)

