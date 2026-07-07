#!/bin/bash
set -e
# Load environment variables from .env file if present
[ -f .env ] && set -a && source .env && set +a

python manage.py wait_for_db $1

python manage.py migrate $1