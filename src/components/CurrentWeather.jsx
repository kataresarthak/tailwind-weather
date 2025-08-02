import React from 'react';
import { getWeatherIcon, getWeatherColor, formatTime, formatSunTime, getWindDirection } from '../utils/weatherUtils';

const CurrentWeather = ({ weather, unit, getTemperatureUnit, getSpeedUnit }) => {
  if (!weather) return null;

  const WeatherMetric = ({ icon, label, value, unit: metricUnit, className = "" }) => (
    <div className={`metric-card ${className}`}>
      <div className="flex items-center justify-center mb-2">
        {icon}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{label}</p>
      <p className="text-lg font-semibold text-gray-900 dark:text-white">
        {value}{metricUnit}
      </p>
    </div>
  );

  return (
    <div className="weather-card">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {weather.city}, {weather.country}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {formatTime(weather.timestamp)}
        </p>
      </div>

      {/* Main weather display */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={getWeatherIcon(weather.icon, '4x')}
            alt={weather.description}
            className="weather-icon"
          />
          <div className="ml-4">
            <h2 className="text-6xl font-bold text-gray-900 dark:text-white">
              {weather.temperature}{getTemperatureUnit()}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 capitalize">
              {weather.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Feels like {weather.feelsLike}{getTemperatureUnit()}
            </p>
          </div>
        </div>

        {/* Temperature range */}
        <div className="text-right">
          <div className="flex items-center space-x-4 text-sm">
            <div>
              <span className="text-red-500 font-semibold">H: {weather.tempMax}{getTemperatureUnit()}</span>
            </div>
            <div>
              <span className="text-blue-500 font-semibold">L: {weather.tempMin}{getTemperatureUnit()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weather metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <WeatherMetric
          icon={
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          }
          label="Humidity"
          value={weather.humidity}
          unit="%"
        />

        <WeatherMetric
          icon={
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          label="Pressure"
          value={weather.pressure}
          unit=" hPa"
        />

        <WeatherMetric
          icon={
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          label="Wind Speed"
          value={weather.windSpeed}
          unit={` ${getSpeedUnit()}`}
        />

        <WeatherMetric
          icon={
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          }
          label="Wind Direction"
          value={getWindDirection(weather.windDirection)}
          unit=""
        />
      </div>

      {/* Sunrise/Sunset */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sunrise</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {formatSunTime(weather.sunrise)}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sunset</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {formatSunTime(weather.sunset)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather; 