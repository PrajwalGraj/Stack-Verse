import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { isUserAuthenticated, isAdminAuthenticated } = useAuth();

  if (role === 'user' && !isUserAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role === 'admin' && !isAdminAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
