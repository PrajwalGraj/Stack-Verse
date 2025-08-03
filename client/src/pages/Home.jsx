import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 page-content">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-primary">StackVerse</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover, learn, and master new skills with our comprehensive course platform. 
              Join thousands of learners advancing their careers with StackVerse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses" className="btn btn-primary btn-lg">
                Browse Courses
              </Link>
              <Link to="/signup" className="btn btn-outline btn-lg">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose StackVerse?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="card-content">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with years of real-world experience
                </p>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-content">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learn Anywhere</h3>
                <p className="text-gray-600">
                  Access your courses on any device, anytime, anywhere with our responsive platform
                </p>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-content">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certificates</h3>
                <p className="text-gray-600">
                  Earn recognized certificates upon course completion to boost your career
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="card max-w-2xl mx-auto">
            <div className="card-content text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join StackVerse today and take the first step towards achieving your goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Create Account
                </Link>
                <Link to="/courses" className="btn btn-outline btn-lg">
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
