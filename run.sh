#!/bin/sh
# Build images and start containers

if [ -f "frontend/Dockerfile" ]; then
  docker-compose up --build -d
else
  echo "Frontend Dockerfile not found; starting backend only"
  docker-compose up --build -d backend
fi

# Wait for the backend to become available
printf "Waiting for backend"
until curl -s http://localhost:8000 >/dev/null 2>&1; do
  printf '.'
  sleep 2
done
echo "\nBackend available at http://localhost:8000"

# Show logs
docker-compose logs -f
