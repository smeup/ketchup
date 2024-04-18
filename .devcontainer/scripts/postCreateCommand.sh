#!/bin/bash

echo "Set permissions"
sudo chown -R node:node node_modules

echo "Set Git hooks"
echo "Set pre-push hook"
cp .devcontainer/scripts/git/pre-push .git/hooks
chmod +x .git/hooks/pre-push

echo "Installing Deps"
yarn install