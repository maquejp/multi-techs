#!/bin/bash

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "Script directory: $SCRIPT_DIR"

# Create required directories
mkdir -p "../../../databases/mongodb/data" "../../../databases/mongodb/config"
if [ $? -ne 0 ]; then
    echo "Error: Failed to create MongoDB directories"
    exit 1
fi

echo "# MongoDB" > "../../../databases/mongodb/README.md"

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
