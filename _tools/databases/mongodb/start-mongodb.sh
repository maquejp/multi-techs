#!/bin/bash

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "Script directory: $SCRIPT_DIR"

# Create required directories
if [ ! -d "../../../databases/mongodb/data" ]; then
mkdir -p "../../../databases/mongodb/data"
chmod 777 "../../../databases/mongodb/data"

mkdir -p "../../../databases/mongodb/config"
chmod 777 "../../../databases/mongodb/config"

echo "# MongoDB" > "../../../databases/mongodb/README.md"
echo " " >> "../../../databases/mongodb/README.md"
echo "Connection details:" >> "../../../databases/mongodb/README.md"
echo "  - Host: localhost" >> "../../../databases/mongodb/README.md"
echo "  - Port: 27017" >> "../../../databases/mongodb/README.md"
echo "  - Username: mongoadmin" >> "../../../databases/mongodb/README.md"
fi

echo "Starting MongoDB container..."
docker compose -f "$SCRIPT_DIR/docker-compose.yml" up -d

echo "Waiting for container to be healthy..."
while [ "$(docker inspect --format='{{.State.Health.Status}}' multitech-mongodb-server 2>/dev/null)" != "healthy" ]; do
    echo "Waiting for MongoDB to be ready..."
    sleep 5
done

echo "MongoDB is now running and healthy!"
echo "Connection details:"
echo "  - Host: localhost"
echo "  - Port: 27017"
echo "  - Username: mongoadmin"
