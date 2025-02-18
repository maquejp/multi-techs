#!/bin/bash

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "Script directory: $SCRIPT_DIR"

# Create required directories
if [ ! -d "../../../databases/mariadb/data" ]; then
mkdir -p "../../../databases/mariadb/data"
chmod 777 "../../../databases/mariadb/data"

echo "# mariadb" > "../../../databases/mariadb/README.md"
echo " " >> "../../../databases/mariadb/README.md"
echo "Connection details:" >> "../../../databases/mariadb/README.md"
echo "  - Host: localhost" >> "../../../databases/mariadb/README.md"
echo "  - Port: 3306" >> "../../../databases/mariadb/README.md"
echo "  - Username: mariadbadmin" >> "../../../databases/mariadb/README.md"
fi

echo "Starting mariadb container..."
docker compose -f "$SCRIPT_DIR/docker-compose.yml" up -d

echo "Waiting for container to be healthy..."
while [ "$(docker inspect --format='{{.State.Health.Status}}' multitech-mariadb-server 2>/dev/null)" != "healthy" ]; do
    echo "Waiting for mariadb to be ready..."
    sleep 5
done

echo "mariadb is now running and healthy!"
echo "Connection details:"
echo "  - Host: localhost"
echo "  - Port: 3306"
echo "  - Username: mariadbadmin"
