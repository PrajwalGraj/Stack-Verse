#!/bin/bash

# Start the Course Selling App
echo "🚀 Starting Course Selling App..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found. Please create one with the required environment variables."
    echo "Required variables:"
    echo "MONGO_URL=your_mongodb_connection_string"
    echo "JWT_USER_SECRET=your_jwt_user_secret"
    echo "JWT_ADMIN_SECRET=your_jwt_admin_secret"
    exit 1
fi

# Start backend in background
echo "📡 Starting backend server..."
node index.js &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend in background
echo "🎨 Starting frontend server..."
cd frontend
npm run dev &
FRONTEND_PID=$!

# Wait for user input to stop
echo ""
echo "✅ Both servers are running!"
echo "Backend: http://localhost:3000"
echo "Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers..."

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Set trap to cleanup on exit
trap cleanup SIGINT SIGTERM

# Wait for servers to finish
wait
