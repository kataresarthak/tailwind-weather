import React, { useEffect } from 'react';
import { useWeatherData } from './hooks/useWeatherData';
import { useDarkMode } from './hooks/useDarkMode';
import SearchBox from './components/SearchBox';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import DarkModeToggle from './components/DarkModeToggle';
import UnitToggle from './components/UnitToggle';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

export default function WeatherApp() {
  const {
    currentWeather,
    hourlyForecast,
    dailyForecast,
    loading,
    error,
    unit,
    fetchWeatherData,
    toggleUnit,
    getTemperatureUnit,
    getSpeedUnit,
  } = useWeatherData();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Load default city on first visit
  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      fetchWeatherData(lastCity);
    }
  }, [fetchWeatherData]);

  const handleSearch = (city) => {
    localStorage.setItem('lastCity', city);
    fetchWeatherData(city);
  };

  const handleRetry = () => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      fetchWeatherData(lastCity);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Weather App
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Get real-time weather updates and forecasts
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <SearchBox onSearch={handleSearch} loading={loading} />
          <div className="flex items-center space-x-4">
            <UnitToggle unit={unit} toggleUnit={toggleUnit} />
          </div>
        </div>

        {/* Dark mode toggle */}
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {/* Content */}
        <div className="space-y-8">
          {loading && <LoadingSpinner />}
          
          {error && !loading && (
            <ErrorMessage error={error} onRetry={handleRetry} />
          )}
          
          {!loading && !error && currentWeather && (
            <>
              <CurrentWeather
                weather={currentWeather}
                unit={unit}
                getTemperatureUnit={getTemperatureUnit}
                getSpeedUnit={getSpeedUnit}
              />
              
              <HourlyForecast
                forecast={hourlyForecast}
                getTemperatureUnit={getTemperatureUnit}
              />
              
              <DailyForecast
                forecast={dailyForecast}
                getTemperatureUnit={getTemperatureUnit}
              />
            </>
          )}
          
          {!loading && !error && !currentWeather && (
            <div className="weather-card text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
                <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Welcome to Weather App
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Search for a city above to get started with weather information.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">
            Powered by OpenWeather API • Built with React & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
