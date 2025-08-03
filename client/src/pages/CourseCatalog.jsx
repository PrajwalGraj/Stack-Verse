import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [purchaseLoading, setPurchaseLoading] = useState({});

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/course/preview');
      setCourses(response.data.courseList || []);
    } catch (error) {
      setError('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (courseId) => {
    const token = localStorage.getItem('userToken');
    
    if (!token) {
      alert('Please login to purchase courses');
      return;
    }

    setPurchaseLoading(prev => ({ ...prev, [courseId]: true }));

    try {
      const response = await axios.post('/course/purchase', {
        courseId
      }, {
        headers: { token }
      });

      if (response.data.message === 'Course Purchase successful') {
        alert('Course purchased successfully!');
      } else {
        alert(response.data.message || 'Purchase failed');
      }
    } catch (error) {
      alert('Purchase failed. Please try again.');
    } finally {
      setPurchaseLoading(prev => ({ ...prev, [courseId]: false }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Catalog</h1>
          <p className="text-xl text-gray-600">Discover amazing courses to advance your skills</p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-500">No courses available at the moment</h3>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-200">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  {course.imageUrl ? (
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-lg font-medium">Course Image</p>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      ${course.price}
                    </div>
                    <button
                      onClick={() => handlePurchase(course._id)}
                      disabled={purchaseLoading[course._id]}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {purchaseLoading[course._id] ? 'Purchasing...' : 'Purchase'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;
