FROM ubuntu:20.04
LABEL author="rt.wadewang"
LABEL description="View local development environment."
ARG version="7.4"
WORKDIR /home/tke
COPY ./src /tmp
RUN apt-get update \
    && useradd -g root -d /home/tke/local/core local \
    && useradd -g root -d /home/tke/preview/core preview \
    && useradd -g root -d /home/tke/dev2/core dev2 \
    && useradd -g root -d /home/tke/rc/core rc \
    && useradd -g root -d /home/tke/live/core live \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh ${version}
ENTRYPOINT ["/run/entrypoint.sh"]
EXPOSE 80