#!/bin/bash

echo "Set permissions"
sudo chown -R node:node node_modules

echo "Installing Deps"
yarn install