FROM ubuntu:20.04
LABEL author="rt.wadewang"
LABEL description="Tke local development environment."
ARG version="7.4"
WORKDIR /home/tke
COPY ./src /tmp
RUN sed -i "s@archive.ubuntu.com@mirrors.163.com@g" /etc/apt/sources.list \
    && useradd -g root -d /home/tke/local/core local \
    && useradd -g root -d /home/tke/preview/core preview \
    && apt-get update \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh ${version}
ENTRYPOINT ["/run/entrypoint.sh"]
EXPOSE 80