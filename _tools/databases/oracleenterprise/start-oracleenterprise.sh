#!/bin/bash

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "Script directory: $SCRIPT_DIR"

# Create required directories
if [ ! -d "./databases/oracleenterprise/data" ]; then
echo "creating directories"
mkdir -p "./databases/oracleenterprise/data"
chmod 777 "./databases/oracleenterprise/data"

echo "# oracleenterprise" > "./databases/oracleenterprise/README.md"
echo " " >> "./databases/oracleenterprise/README.md"
echo "Connection details:" >> "./databases/oracleenterprise/README.md"
echo "  - Host: localhost" >> "./databases/oracleenterprise/README.md"
echo "  - Port: 1521" >> "./databases/oracleenterprise/README.md"
echo "  - Username: system" >> "./databases/oracleenterprise/README.md"
fi

echo "Starting oracleenterprise container..."
docker compose -f "$SCRIPT_DIR/docker-compose.yml" up -d

echo "Waiting for container to be healthy..."
while [ "$(docker inspect --format='{{.State.Health.Status}}' multitech-oracleenterprise-server 2>/dev/null)" != "healthy" ]; do
    echo "Waiting for oracleenterprise to be ready..."
    sleep 5
done

echo "oracleenterprise is now running and healthy!"
echo "Connection details:"
echo "  - Host: localhost"
echo "  - Port: 1521"
echo "  - Username: system"
