import { useState, useEffect, useCallback } from 'react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || "090b5ae3926b4d3818214476ba03e752"; // Use your API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const useWeatherData = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

  const fetchWeatherData = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather
      const currentResponse = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      
      if (!currentResponse.ok) {
        throw new Error('City not found');
      }
      
      const currentData = await currentResponse.json();
      
      // Fetch 5-day forecast
      const forecastResponse = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      
      if (!forecastResponse.ok) {
        throw new Error('Forecast data not available');
      }
      
      const forecastData = await forecastResponse.json();
      
      // Process current weather
      const processedCurrentWeather = {
        city: currentData.name,
        country: currentData.sys.country,
        temperature: Math.round(currentData.main.temp),
        feelsLike: Math.round(currentData.main.feels_like),
        tempMin: Math.round(currentData.main.temp_min),
        tempMax: Math.round(currentData.main.temp_max),
        humidity: currentData.main.humidity,
        pressure: currentData.main.pressure,
        windSpeed: Math.round(currentData.wind.speed * 3.6), // Convert m/s to km/h
        windDirection: currentData.wind.deg,
        description: currentData.weather[0].description,
        icon: currentData.weather[0].icon,
        main: currentData.weather[0].main,
        sunrise: new Date(currentData.sys.sunrise * 1000),
        sunset: new Date(currentData.sys.sunset * 1000),
        timestamp: new Date(currentData.dt * 1000),
      };
      
      // Process hourly forecast (next 12 hours)
      const hourlyData = forecastData.list.slice(0, 4); // 3-hour intervals, so 4 items = 12 hours
      const processedHourly = hourlyData.map(item => ({
        time: new Date(item.dt * 1000),
        temperature: Math.round(item.main.temp),
        feelsLike: Math.round(item.main.feels_like),
        humidity: item.main.humidity,
        windSpeed: Math.round(item.wind.speed * 3.6),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        main: item.weather[0].main,
      }));
      
      // Process daily forecast (next 5 days)
      const dailyData = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 5);
      const processedDaily = dailyData.map(item => ({
        date: new Date(item.dt * 1000),
        temperature: Math.round(item.main.temp),
        tempMin: Math.round(item.main.temp_min),
        tempMax: Math.round(item.main.temp_max),
        humidity: item.main.humidity,
        windSpeed: Math.round(item.wind.speed * 3.6),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        main: item.weather[0].main,
      }));
      
      setCurrentWeather(processedCurrentWeather);
      setHourlyForecast(processedHourly);
      setDailyForecast(processedDaily);
      
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setHourlyForecast([]);
      setDailyForecast([]);
    } finally {
      setLoading(false);
    }
  }, [unit]);

  const toggleUnit = useCallback(() => {
    setUnit(prev => prev === 'metric' ? 'imperial' : 'metric');
  }, []);

  const getTemperatureUnit = useCallback(() => {
    return unit === 'metric' ? '°C' : '°F';
  }, [unit]);

  const getSpeedUnit = useCallback(() => {
    return unit === 'metric' ? 'km/h' : 'mph';
  }, [unit]);

  return {
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
  };
}; 