FROM python:3.11
LABEL author="rt.wadewang"
LABEL description="View MaxKb development environment."
WORKDIR /opt/maxkb/app
ENV VIRTUAL_ENV=/opt/maxkb/app/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
SHELL ["/bin/bash", "-c"]
COPY entrypoint.sh /run
RUN python -m venv $VIRTUAL_ENV \
    && apt-get update \
    && apt-get install -y nodejs npm \
    && pip install --upgrade pip \
    && pip install poetry django pillow pyyaml djangorestframework drf-yasg django-filter django-apscheduler django-celery-beat psycopg2 \
    && apt-get autoremove --yes \
    && apt-get clean \
    && rm -rf /tmp/* /var/lib/apt/lists/* \
    && chmod +x /run/entrypoint.sh
CMD ["python", "main.py", "start"]
EXPOSE 8080/tcp
