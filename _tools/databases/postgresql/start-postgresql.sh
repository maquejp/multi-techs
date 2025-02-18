#!/bin/bash

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "Script directory: $SCRIPT_DIR"

# Create required directories
if [ ! -d "./databases/postgresql/data" ]; then
mkdir -p "./databases/postgresql/data"
chmod 777 "./databases/postgresql/data"

echo "# POSTGRESQL" > "./databases/postgresql/README.md"
echo " " >> "./databases/postgresql/README.md"
echo "Connection details:" >> "./databases/postgresql/README.md"
echo "  - Host: localhost" >> "./databases/postgresql/README.md"
echo "  - Port: 5432" >> "./databases/postgresql/README.md"
echo "  - Username: postgresqladmin" >> "./databases/postgresql/README.md"
fi

echo "Starting POSTGRESQL container..."
docker compose -f "$SCRIPT_DIR/docker-compose.yml" up -d

echo "Waiting for container to be healthy..."
while [ "$(docker inspect --format='{{.State.Health.Status}}' multitech-postgresql-server 2>/dev/null)" != "healthy" ]; do
    echo "Waiting for POSTGRESQL to be ready..."
    sleep 5
done

echo "POSTGRESQL is now running and healthy!"
echo "Connection details:"
echo "  - Host: localhost"
echo "  - Port: 5432"
echo "  - Username: postgresqladmin"
