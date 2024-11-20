FROM python:3.11
LABEL author="rt.wadewang"
LABEL description="View MaxKb development environment."
WORKDIR /opt/maxkb/app
SHELL ["/bin/bash", "-c"]
COPY init.sh /run
COPY entrypoint.sh /run
RUN apt-get update \
    && apt-get install -y nodejs npm \
    && pip install --upgrade pip \
    && pip install poetry django pillow pyyaml djangorestframework drf-yasg django-filter django-apscheduler django-celery-beat psycopg2 \
    && apt-get autoremove --yes \
    && apt-get clean \
    && rm -rf /tmp/* /var/lib/apt/lists/* \
    && chmod +x /run/init.sh /run/entrypoint.sh
CMD ["python", "main.py", "start"]
EXPOSE 8080/tcp
