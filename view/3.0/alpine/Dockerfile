FROM alpine:3.19
LABEL author="rt.wadewang"
LABEL description="View local development environment."
WORKDIR /opt/tk
COPY src /tmp
RUN apk update \
    && adduser -G root -D -h /opt/tk tk \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
CMD ["/bin/sh", "-c", "/run/entrypoint.sh"]
EXPOSE 80/tcp
