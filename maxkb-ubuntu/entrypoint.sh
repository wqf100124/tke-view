#!/bin/bash
rm -f /opt/maxkb/app/tmp/*.pid
#Start MaxKB
python /opt/maxkb/app/main.py start
