FROM ubuntu:24.04
LABEL author="rt.wadewang"
LABEL description="View local development environment."
ARG version="8.2"
WORKDIR /opt/tk
COPY ./src /tmp
RUN apt-get update \
    && useradd -g root -d /opt/tk tk \
    && chmod +x /tmp/install.sh \
    && /tmp/install.sh ${version}
CMD ["/bin/bash", "-c", "/run/entrypoint.sh"]
EXPOSE 80
