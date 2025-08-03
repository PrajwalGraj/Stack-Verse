import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, admin, logoutUser, logoutAdmin, isUserAuthenticated, isAdminAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (user) {
      logoutUser();
    }
    if (admin) {
      logoutAdmin();
    }
    navigate('/');
  };

  return (
    <nav>
      <div className="nav-content">
        <Link to="/" className="logo">
          StackVerse
        </Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          
          {isUserAuthenticated ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/my-courses">My Courses</Link>
              <button onClick={handleLogout} className="btn btn-danger btn-sm">
                Logout
              </button>
            </>
          ) : isAdminAuthenticated ? (
            <>
              <Link to="/admin/dashboard">Admin Dashboard</Link>
              <button onClick={handleLogout} className="btn btn-danger btn-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
              <Link to="/admin/login" className="btn btn-outline btn-sm">
                Admin
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
