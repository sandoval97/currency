from django.db import models

class Currency(models.Model):
    date = models.DateField()
    symbol = models.CharField(max_length=3)
    amount = models.FloatField()

    def __str__(self):
        return '{}/{}/{}'.format(self.amount,self.date,self.symbol)