# StackVerse - Course Selling Platform

A full-stack course selling application built with Node.js, Express, MongoDB, and React.

## Project Structure

```
course-selling-app/
├── server/                 # Backend (Node.js + Express)
│   ├── routes/            # API route handlers
│   ├── middleware/        # Authentication middleware
│   ├── config.js         # Database configuration
│   ├── index.js          # Server entry point
│   └── package.json      # Server dependencies
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React Context (state management)
│   │   └── App.jsx       # Main app component
│   └── package.json      # Client dependencies
├── package.json          # Root workspace configuration
└── README.md
```

## Features

### For Students
- User registration and authentication
- Browse course catalog
- Purchase courses
- View purchased courses
- Personal dashboard

### For Admins
- Admin registration and authentication
- Create and manage courses
- Update course details
- Admin dashboard

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **CORS** for cross-origin requests

### Frontend
- **React** with Vite
- **React Router** for navigation
- **Axios** for API calls
- **Custom CSS** for styling
- **Context API** for state management

## Setup Instructions

### Quick Start (Recommended)

1. Install all dependencies:
   ```bash
   npm run install-all
   ```

2. Set up environment variables:
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB URL and JWT secrets
   ```

3. Start both server and client:
   ```bash
   npm run dev
   ```

### Manual Setup

#### Backend Setup

1. Navigate to server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_USER_SECRET=your_secure_jwt_user_secret
   JWT_ADMIN_SECRET=your_secure_jwt_admin_secret
   ```
   
   **⚠️ IMPORTANT**: Never commit the `.env` file to version control!

4. Start the backend server:
   ```bash
   npm run dev     # Development with nodemon
   # or
   npm start       # Production
   ```
   Server runs on `http://localhost:3000`

#### Frontend Setup

1. Navigate to client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## API Endpoints

### User Routes
- `POST /user/signup` - User registration
- `POST /user/signin` - User login
- `GET /user/purchases` - Get purchased courses

### Admin Routes
- `POST /admin/signup` - Admin registration
- `POST /admin/signin` - Admin login
- `POST /admin/createcourse` - Create course
- `PUT /admin/courseupdate` - Update course
- `POST /admin/coursedisplay` - Get admin courses

### Course Routes
- `GET /course/preview` - Get all courses
- `POST /course/purchase` - Purchase course
