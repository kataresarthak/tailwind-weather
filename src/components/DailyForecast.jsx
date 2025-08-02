import React from 'react';
import { getWeatherIcon, formatDate } from '../utils/weatherUtils';

const DailyForecast = ({ forecast, getTemperatureUnit }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="weather-card">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        5-Day Forecast
      </h2>
      
      <div className="space-y-3">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-all duration-200"
          >
            {/* Date */}
            <div className="flex-1">
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatDate(day.date)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                {day.description}
              </div>
            </div>
            
            {/* Weather icon */}
            <div className="flex items-center mx-4">
              <img
                src={getWeatherIcon(day.icon, '2x')}
                alt={day.description}
                className="w-12 h-12"
              />
            </div>
            
            {/* Temperature range */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {day.temperature}{getTemperatureUnit()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {day.tempMin}{getTemperatureUnit()} - {day.tempMax}{getTemperatureUnit()}
                </div>
              </div>
            </div>
            
            {/* Additional metrics */}
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                {day.humidity}%
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {day.windSpeed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast; 