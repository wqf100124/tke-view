FROM python:3.11
LABEL author="rt.wadewang"
LABEL description="View MaxKb development environment."
WORKDIR /opt/maxkb/app
RUN apt-get update \
    && apt-get install -y nodejs npm \
    && pip install --upgrade pip \
    && pip install poetry django pillow pyyaml djangorestframework drf-yasg django-filter django-apscheduler django-celery-beat psycopg2 \
    && python -m venv /opt/maxkb/app/venv  \
    && source /opt/maxkb/app/venv/bin/activate\
    && apt-get autoremove --yes \
    && apt-get clean \
    && rm -rf /tmp/* /var/lib/apt/lists/*
CMD ["python", "main.py", "start"]
EXPOSE 8000/tcp
