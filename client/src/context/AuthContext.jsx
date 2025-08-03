import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Base URL for API calls
  const API_BASE_URL = 'http://localhost:3000';

  // Configure axios defaults
  axios.defaults.baseURL = API_BASE_URL;

  useEffect(() => {
    // Check for existing token on app load
    const userToken = localStorage.getItem('userToken');
    const adminToken = localStorage.getItem('adminToken');
    
    if (userToken) {
      setUser({ token: userToken });
      axios.defaults.headers.common['token'] = userToken;
    }
    
    if (adminToken) {
      setAdmin({ token: adminToken });
      axios.defaults.headers.common['token'] = adminToken;
    }
    
    setLoading(false);
  }, []);

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('/user/signin', {
        email,
        password
      });
      
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('userToken', token);
        setUser({ token, email });
        axios.defaults.headers.common['token'] = token;
        return { success: true };
      } else {
        return { success: false, message: response.data.message || 'Login failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const signupUser = async (firstname, lastname, email, password) => {
    try {
      const response = await axios.post('/user/signup', {
        email,
        password,
        firstname,
        lastname
      });
      
      return { 
        success: true, 
        message: response.data.message 
      };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Signup failed' 
      };
    }
  };

  const loginAdmin = async (email, password) => {
    try {
      const response = await axios.post('/admin/signin', {
        email,
        password
      });
      
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('adminToken', token);
        setAdmin({ token, email });
        axios.defaults.headers.common['token'] = token;
        return { success: true };
      } else {
        return { success: false, message: response.data.message || 'Admin login failed' };
      }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Admin login failed' 
      };
    }
  };

  const signupAdmin = async (firstname, lastname, email, password) => {
    try {
      const response = await axios.post('/admin/signup', {
        email,
        password,
        firstname,
        lastname
      });
      
      return { 
        success: true, 
        message: response.data.message 
      };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Admin signup failed' 
      };
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('userToken');
    setUser(null);
    delete axios.defaults.headers.common['token'];
  };

  const logoutAdmin = () => {
    localStorage.removeItem('adminToken');
    setAdmin(null);
    delete axios.defaults.headers.common['token'];
  };

  const value = {
    user,
    admin,
    loading,
    loginUser,
    signupUser,
    loginAdmin,
    signupAdmin,
    logoutUser,
    logoutAdmin,
    isUserAuthenticated: !!user,
    isAdminAuthenticated: !!admin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
