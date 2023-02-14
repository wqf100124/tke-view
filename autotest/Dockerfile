FROM alpine:3.15
LABEL author="rt.wadewang"
LABEL description="View auto testing development environment."
WORKDIR /home/tke/autotest
COPY ./src /tmp
RUN apk update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
ENTRYPOINT ["/run/entrypoint.sh"]