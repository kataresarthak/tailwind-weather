import React from 'react';

const LoadingSpinner = ({ message = "Loading weather data..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-blue-200 dark:border-gray-600 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>
        
        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-blue-100 dark:border-gray-700 rounded-full animate-spin-slow">
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-500 dark:border-t-blue-300 rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Center dot */}
        <div className="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
      </div>
      
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center">
        {message}
      </p>
      
      <div className="mt-4 flex space-x-1">
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 