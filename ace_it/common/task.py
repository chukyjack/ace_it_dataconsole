import datetime
import celery
# from course.models import Course
import logging

logger = logging.getLogger('My task')

@celery.decorators.periodic_task(run_every=datetime.timedelta(minutes=1)) # here we assume we want it to be run every 5 mins
def myTask():
    # Do something here
    # like accessing remote apis,
    # calculating resource intensive computational data
    # and store in cache
    # or anything you please
    # Course.objects.create(name='first course today', level=112)
    logger.info('task is runningsss')
    print('This wasn\'t so difficult')