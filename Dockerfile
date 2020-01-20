FROM python:3.5.9-alpine

WORKDIR /srv/currency

#default enviroment variables
ENV PYTHONUNBUFFERED 1
ENV LANG C.UTF-8

#RUN yum install -y libpq-dev

RUN apk upgrade --available && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip install pipenv

COPY ./Pipfile ./
RUN python -m pipenv lock && python -m pipenv install --system --dev

COPY ./ ./