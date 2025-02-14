#!/bin/bash

echo "Starting MongoDB container..."
docker-compose -f "$(dirname "$0")/docker-compose.yml" up -d

echo "Waiting for container to be healthy..."
while [ "$(docker inspect --format='{{.State.Health.Status}}' mongodb-server 2>/dev/null)" != "healthy" ]; do
    echo "Waiting for MongoDB to be ready..."
    sleep 5
done

echo "MongoDB is now running and healthy!"
echo "Connection details:"
echo "  - Host: localhost"
echo "  - Port: 27017"
echo "  - Username: mongoadmin"
