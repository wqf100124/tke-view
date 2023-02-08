FROM alpine:3.15
LABEL author="rt.wadewang"
LABEL description="View local development environment."
WORKDIR /home/tke
COPY ./src /tmp
RUN apk update \
    && adduser -G root -D -h /home/tke/local local \
    && adduser -G root -D -h /home/tke/preview preview \
    && adduser -G root -D -h /home/tke/dev2 dev2 \
    && adduser -G root -D -h /home/tke/rc rc \
    && adduser -G root -D -h /home/tke/live live \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
ENTRYPOINT ["/run/entrypoint.sh"]
EXPOSE 80/tcp