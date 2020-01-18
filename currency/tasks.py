from celery.task.schedules import crontab
from celery.decorators import periodic_task
from celery.utils.log import get_task_logger
from currency.models import Currency
from pytz import timezone
from datetime import datetime
from .format import FormData

logger = get_task_logger(__name__)


@periodic_task(
    run_every=(crontab(minute='*/2')),
    name="Recolected data",
    ignore_result=True
)
def task_save_latest_currencys():
    dato = FormData()
    if len(Currency.objects.all()) is 0:
        if dato.insert_historic():
            dato.querystring = {"format":"json","to":'EUR',"from":'USD',"amount":"1"}
            dato.insert_historic()
            return None
    elif not Currency.objects.filter(date=str(datetime.now().date())).exists():
        dato.set_information(str(datetime.now().date()))
        dato.querystring = {"format":"json","to":'EUR',"from":'USD',"amount":"1"}
        dato.set_information(str(datetime.now().date()))
    else:
        print("todo update")
    
   