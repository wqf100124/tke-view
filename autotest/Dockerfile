FROM alpine:3.14
LABEL author="rt.wadewang"
LABEL description="Tke autotest development environment."
WORKDIR /home/tke/autotest/selenium
COPY ./src /tmp
RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories \
    && apk update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
ENTRYPOINT ["/run/entrypoint.sh"]