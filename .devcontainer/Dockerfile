FROM mcr.microsoft.com/devcontainers/javascript-node:1-18-bullseye

# [Optional] Uncomment if you want to install an additional version of node using nvm
ARG EXTRA_NODE_VERSION="lts/hydrogen"
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"