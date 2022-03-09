FROM alpine:3.15
LABEL author="rt.wadewang"
LABEL description="Tke local development environment."
WORKDIR /home/tke
COPY ./src /tmp
RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories \
    && adduser -G root -D -h /home/tke/local/core local \
    && adduser -G root -D -h /home/tke/preview/core preview \
    && apk update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh
ENTRYPOINT ["/run/entrypoint.sh"]
EXPOSE 80/tcp