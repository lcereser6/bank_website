#!/bin/bash
git pull origin main
yarn install &&
yarn build &&
pm2 restart bank_website 