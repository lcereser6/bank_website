#!/bin/bash
cd /home/ubuntu/bank_website
#if it is not running, start it
if ! pm2 list | grep -q 'bank_website'; then
  pm2 start yarn --name bank_website -- start -p 3000
#otherwise, restart it
else
  pm2 restart bank_website
fi
