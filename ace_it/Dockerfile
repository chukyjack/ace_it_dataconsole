FROM python:3.7
ENV PYTHONUNBUFFERED 0
RUN mkdir /ace_it_dataconsole
WORKDIR /ace_it_dataconsole
COPY ./requirements.txt /ace_it_dataconsole/
RUN pip install -r requirements.txt
COPY . /ace_it_dataconsole/
