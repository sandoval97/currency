from datetime import datetime,timedelta
from currency.models import Currency
from django.conf import settings
from requests import request
import json

class FormData():
    console = None
    querystring = {"format":"json","to":'USD',"from":'EUR',"amount":"1"}
    

    def insert_historic(self):
        old = datetime(2020,1,1)
        days = (old.date() -  datetime.now().date()).days
        for x in range(0,-days):
            if old.date() != datetime.now().date():
                self.set_information(str(old.date()))
                old = old + timedelta(days=1)
            else:
                print("No funcionaa")
        return True

    def set_information(self,date):
        #print(self.querystring)
        headers = {
            'x-rapidapi-host': settings.HOST,
            'x-rapidapi-key': settings.KEY
        }
        response = request("GET", settings.URL+date, headers=headers, params=self.querystring)
        data = json.loads(response.text)
        new = Currency(date=data['updated_date'],symbol=data['base_currency_code'],
        amount=data['rates'].get(list(data['rates'].keys())[0])['rate'])
        new.save()
        print(new)