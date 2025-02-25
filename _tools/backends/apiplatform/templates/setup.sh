#!/bin/bash

if [ ! -d "/var/www/api/public" ]; then
    # Run Symfony project creation
    symfony new api --version=lts --webapp --no-interaction --no-git
    cd /var/www/api/
    symfony composer req api
else
    echo "Symfony project already exists"
fi

# Start Supervisor to manage processes
/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
