FROM ubuntu:22.04
LABEL author="rt.wadewang"
LABEL description="View local development environment."
ARG version="8.2"
WORKDIR /home/tke
COPY src /tmp
RUN apt-get update \
    && useradd -g root -d /home/tke/local local \
    && useradd -g root -d /home/tke/preview preview \
    && useradd -g root -d /home/tke/dev2 dev2 \
    && useradd -g root -d /home/tke/rc rc \
    && useradd -g root -d /home/tke/live live \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh ${version}
CMD ["/bin/bash", "-c", "/run/entrypoint.sh"]
EXPOSE 80
