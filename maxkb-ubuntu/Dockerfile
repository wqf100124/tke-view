FROM python:3.11
LABEL author="rt.wadewang"
LABEL description="View MaxKb development environment."
WORKDIR /opt/maxkb
COPY src/init.sh /run
COPY src/poetry.lock /opt/maxkb
COPY src/pyproject.toml /opt/maxkb
RUN apk update \
    && apt-get install -y nodejs npm \
    && pip install --upgrade pip \
    && pip install poetry django pillow pyyaml djangorestframework drf-yasg django-filter django-apscheduler django-celery-beat psycopg2 \
    && poetry install \
    && apt-get remove --yes software-properties-common \
    && apt-get autoremove --yes \
    && apt-get clean \
    && rm -rf /tmp/* /var/lib/apt/lists/* \
    && chmod +x /run/init.sh
CMD ["python", "main.py", "start"]
EXPOSE 8000/tcp
