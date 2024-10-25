FROM python:3.11-alpine
LABEL author="rt.wadewang"
LABEL description="View MaxKb development environment."
WORKDIR /opt/code
COPY src/init.sh /run
COPY src/poetry.lock /opt/code
COPY src/pyproject.toml /opt/code
RUN apk update \
    && apk add --no-cache nodejs npm \
    && pip install poetry django \
    && poetry install \
    && rm -rf /var/cache/apk/* /root/.cache /tmp/* \
    && chmod +x /run/init.sh
CMD ["python", "main.py", "start"]
EXPOSE 8000/tcp
