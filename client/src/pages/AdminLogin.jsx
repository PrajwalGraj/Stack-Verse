import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { loginAdmin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await loginAdmin(formData.email, formData.password);
    
    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 page-content">
      <div className="flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="card">
            <div className="card-content">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
                <p className="text-gray-600 mt-2">Access StackVerse admin panel</p>
              </div>

              {error && (
                <div className="alert alert-error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="Enter admin email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="form-input"
                    placeholder="Enter admin password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="loading-spinner mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    'Sign In as Admin'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Need admin access?{' '}
                  <Link to="/admin/signup" className="text-primary font-medium hover:underline">
                    Create admin account
                  </Link>
                </p>
                <p className="text-gray-600 mt-2">
                  <Link to="/login" className="text-primary font-medium hover:underline">
                    Back to user login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
