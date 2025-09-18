#!/bin/bash

# Enclosed.AI Launch Script
# Generates random ports to avoid conflicts with other applications

echo "🚀 Starting Enclosed.AI..."

# Generate random ports between 4000-8000 to avoid conflicts
PORT=$((4000 + RANDOM % 4000))

# Check if port is in use and find a free one
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; do
    echo "Port $PORT is in use, trying another..."
    PORT=$((4000 + RANDOM % 4000))
done

echo "✨ Using port: $PORT"

# Export port for Next.js
export PORT=$PORT

# Kill any existing processes on the port (just in case)
lsof -ti:$PORT | xargs kill -9 2>/dev/null

# Ensure dependencies are installed
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the application
echo "🔨 Building application..."
npm run build

# Start the application
echo "🎯 Launching Enclosed.AI on http://localhost:$PORT"
echo "──────────────────────────────────────────"
echo "   Application: Enclosed.AI"
echo "   Environment: Production"
echo "   Port: $PORT"
echo "   URL: http://localhost:$PORT"
echo "──────────────────────────────────────────"
echo ""

# Open in browser after a short delay
(sleep 3 && open http://localhost:$PORT) &

# Start the server
npm run start