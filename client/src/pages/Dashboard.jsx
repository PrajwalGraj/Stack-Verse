import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Continue your learning journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
                <p className="text-2xl font-bold text-gray-900">-</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">-</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                <p className="text-2xl font-bold text-gray-900">-</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Link
                to="/courses"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition duration-200"
              >
                Browse All Courses
              </Link>
              <Link
                to="/my-courses"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg font-medium transition duration-200"
              >
                View My Courses
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="text-gray-500 text-center py-8">
              <p>No recent activity to show</p>
              <p className="text-sm mt-2">Start learning to see your progress here!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
