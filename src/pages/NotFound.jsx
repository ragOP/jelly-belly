import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import { ROUTES } from '../router/routes';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffe1e7] to-[#fff5f7]">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-[#ffabbb] to-[#ff8a9f] bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          {/* Error Message */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-lg text-gray-700 mb-8">
            The page you're looking for doesn't exist. Let's get you back to our beautiful JellyClip collection!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={ROUTES.HOME}>
              <CTAButton 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto"
              >
                <Home size={20} />
                Back to Home
              </CTAButton>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-[#ff8a9f] hover:text-[#ff6b85] font-medium transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 