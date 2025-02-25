#!/bin/bash

# Run Symfony project creation
symfony new api --version=lts --webapp --no-interaction --no-git

# Any other actions you want to add
echo "Additional setup actions go here."

# Start Supervisor to manage processes
/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
