import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import AdminDashboard from './pages/AdminDashboard';
import CourseCatalog from './pages/CourseCatalog';
import MyCourses from './pages/MyCourses';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/courses" element={<CourseCatalog />} />
              
              {/* User Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute role="user">
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-courses"
                element={
                  <ProtectedRoute role="user">
                    <MyCourses />
                  </ProtectedRoute>
                }
              />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/signup" element={<AdminSignup />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute role="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
