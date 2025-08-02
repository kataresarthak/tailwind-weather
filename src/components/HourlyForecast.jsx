import React from 'react';
import { getWeatherIcon, formatTime } from '../utils/weatherUtils';

const HourlyForecast = ({ forecast, getTemperatureUnit }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="weather-card">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Hourly Forecast
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {forecast.map((hour, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 text-center hover:shadow-md transition-all duration-200"
          >
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {formatTime(hour.time)}
            </div>
            
            <img
              src={getWeatherIcon(hour.icon, '2x')}
              alt={hour.description}
              className="w-12 h-12 mx-auto mb-2"
            />
            
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {hour.temperature}{getTemperatureUnit()}
            </div>
            
            <div className="text-xs text-gray-600 dark:text-gray-300 capitalize">
              {hour.description}
            </div>
            
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                {hour.humidity}%
              </div>
              
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {hour.windSpeed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast; 