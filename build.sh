#!/usr/bin/env bash
# exit on error
set -o errexit

# Install dependencies
npm install

# Run build (if needed)
npm run build