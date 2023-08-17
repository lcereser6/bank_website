#!/bin/bash
cd /home/ubuntu/bank_website
#if it is not running, start it
if ! pm2 list | grep -q 'bank_website'; then
  pm2 start npm --name "bank_website" -- start
#otherwise, restart it
else
  pm2 restart bank_website
fi
