import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyCourses = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPurchasedCourses();
  }, []);

  const fetchPurchasedCourses = async () => {
    try {
      const token = localStorage.getItem('userToken');
      if (!token) {
        setError('Please login to view your courses');
        setLoading(false);
        return;
      }

      const response = await axios.get('/user/purchases', {
        headers: { token }
      });

      setPurchasedCourses(response.data.courseData || []);
    } catch (error) {
      setError('Failed to fetch your courses');
    } finally {
      setLoading(false);
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="text-gray-600 mt-2">Your purchased courses and learning progress</p>
        </div>

        {purchasedCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses yet</h3>
              <p className="text-gray-600 mb-6">You haven't purchased any courses yet. Start learning today!</p>
              <a
                href="/courses"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 inline-block"
              >
                Browse Courses
              </a>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purchasedCourses.map((course) => (
              <div key={course._id} className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                    <div className="text-lg font-semibold text-green-600">
                      Purchased
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200 ease-in-out">
                      Start Learning
                    </button>
                  </div>
                  
                  {/* Progress Bar (placeholder) */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                    </div>
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

export default MyCourses;
