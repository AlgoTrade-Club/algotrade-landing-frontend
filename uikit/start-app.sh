#!/bin/bash

# Stop and remove existing MongoDB container if it exists
echo "Stopping and removing existing MongoDB container if it exists..."
docker stop Tradnomic-mongodb 2>/dev/null
docker rm Tradnomic-mongodb 2>/dev/null

# Start MongoDB container
echo "Starting MongoDB container..."
docker run --name Tradnomic-mongodb \
  -d \
  -p 10000:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  -e MONGO_INITDB_DATABASE=mydatabase \
  mongo:latest

# Wait for MongoDB to start
echo "Waiting for MongoDB to start..."
sleep 5

# Check if MongoDB is running
if docker ps | grep -q Tradnomic-mongodb; then
  echo "MongoDB is running on port 10000"
  echo "Connection string: mongodb://admin:secret@localhost:10000/mydatabase?authSource=admin"
else
  echo "Failed to start MongoDB container"
  exit 1
fi

# Optional: Initialize the database with a test collection
echo "Initializing database..."
docker exec Tradnomic-mongodb mongosh --host localhost -u admin -p secret --authenticationDatabase admin --eval "use mydatabase; db.createCollection('waitlist');"

echo "MongoDB setup complete!"

# Start the Next.js application
echo "Starting Next.js application..."
cd /Users/victorhuang/Documents/Tradnomic/github_project/algotrade/algotrade-landing-frontend/uikit
npm run dev