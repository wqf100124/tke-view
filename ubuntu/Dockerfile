FROM ubuntu:22.04
LABEL author="rt.wadewang"
LABEL description="View local development environment."
ARG version="7.4"
WORKDIR /home/tke
COPY ./src /tmp
RUN apt-get update \
    && useradd -g root -d /home/tke/local/home/tke/autotest local \
    && useradd -g root -d /home/tke/preview/home/tke/autotest preview \
    && useradd -g root -d /home/tke/dev2/home/tke/autotest dev2 \
    && useradd -g root -d /home/tke/rc/home/tke/autotest rc \
    && useradd -g root -d /home/tke/live/home/tke/autotest live \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh ${version}
ENTRYPOINT ["/run/entrypoint.sh"]
EXPOSE 80