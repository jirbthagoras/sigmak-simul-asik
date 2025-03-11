#!/bin/bash

# Get app directory
npm install
npm audit fix
sudo chown -R webapp:webapp node_modules
# Populate database
npm run db:migrate