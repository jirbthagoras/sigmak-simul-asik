#!/bin/bash

# Ensure node_modules directory exists
mkdir -p /var/app/current/node_modules

# Set the correct permissions
chown -R webapp:webapp /var/app/current/node_modules
chmod -R 755 /var/app/current/node_modules