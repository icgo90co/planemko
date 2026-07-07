#!/bin/bash
set -e
# Load environment variables from .env file if present
[ -f .env ] && set -a && source .env && set +a

python manage.py wait_for_db
# Wait for migrations
python manage.py wait_for_migrations
# Run the processes
celery -A plane beat -l info