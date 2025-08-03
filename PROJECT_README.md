# CourseHub - Course Selling App

A full-stack course selling application built with Node.js, Express, MongoDB, and React.

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
- **Tailwind CSS** for styling
- **Context API** for state management

## Setup Instructions

### Backend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_USER_SECRET=your_jwt_user_secret
   JWT_ADMIN_SECRET=your_jwt_admin_secret
   ```

3. Start the backend server:
   ```bash
   node index.js
   ```
   Server runs on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
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
