FROM python:3.11-alpine
LABEL author="rt.wadewang"
LABEL description="View MaxKb development environment."
WORKDIR /opt/maxkb/app
COPY src/init.sh /run
COPY src/poetry.lock .
COPY src/pyproject.toml .
RUN apk update \
    && apk add --no-cache nodejs npm gcc build-base py3-scikit-learn \
    && pip install --upgrade pip \
    && pip install poetry django pillow pyyaml djangorestframework drf-yasg django-filter django-apscheduler django-celery-beat psycopg2-binary \
    && poetry install \
    && apk rm gcc build-base py3-scikit-learn \
    && rm -rf /var/cache/apk/* /root/.cache /tmp/* \
    && chmod +x /run/init.sh
CMD ["python", "main.py", "start"]
EXPOSE 8000/tcp
