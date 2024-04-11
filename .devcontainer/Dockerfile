FROM mcr.microsoft.com/devcontainers/javascript-node:1-18-bullseye

# Install deps
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends chromium

# Define env vars
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV NODE_OPTIONS=--max-old-space-size=8192

# [Optional] Uncomment if you want to install an additional version of node using nvm
ARG EXTRA_NODE_VERSION="lts/hydrogen"
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"