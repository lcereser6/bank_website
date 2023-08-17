#!/bin/bash
cd ~/bank_website
git pull origin main
yarn install &&
yarn build &&
pm2 restart bank_website 