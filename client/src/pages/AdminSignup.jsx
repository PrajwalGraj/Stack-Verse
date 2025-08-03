import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signupAdmin } = useAuth();
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

    const result = await signupAdmin(formData.firstName, formData.lastName, formData.email, formData.password);
    
    if (result.success) {
      alert('Admin account created successfully! Please login.');
      navigate('/admin/login');
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
                <h2 className="text-2xl font-bold text-gray-900">Admin Registration</h2>
                <p className="text-gray-600 mt-2">Create StackVerse admin account</p>
              </div>

              {error && (
                <div className="alert alert-error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="form-input"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

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
                    placeholder="Create a password"
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
                      Creating account...
                    </div>
                  ) : (
                    'Create Admin Account'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have admin access?{' '}
                  <Link to="/admin/login" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
                <p className="text-gray-600 mt-2">
                  <Link to="/signup" className="text-primary font-medium hover:underline">
                    Create user account instead
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

export default AdminSignup;
