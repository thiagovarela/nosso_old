#!/bin/bash
set -m
/usr/local/bin/services &
/usr/local/bin/workers &
fg %1