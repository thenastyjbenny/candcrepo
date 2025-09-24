#!/bin/bash

# Health check script for Docker containers

echo "Checking application health..."

# Check if the web server is responding
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Web server is healthy"
else
    echo "❌ Web server is not responding"
    exit 1
fi

# Check if the database is accessible
if docker-compose exec -T db pg_isready -U postgres > /dev/null 2>&1; then
    echo "✅ Database is healthy"
else
    echo "❌ Database is not accessible"
    exit 1
fi

# Check if MinIO is accessible
if curl -f http://localhost:9000/minio/health/live > /dev/null 2>&1; then
    echo "✅ MinIO is healthy"
else
    echo "❌ MinIO is not accessible"
    exit 1
fi

# Check if MailHog is accessible
if curl -f http://localhost:8025 > /dev/null 2>&1; then
    echo "✅ MailHog is healthy"
else
    echo "❌ MailHog is not accessible"
    exit 1
fi

echo "🎉 All services are healthy!"
