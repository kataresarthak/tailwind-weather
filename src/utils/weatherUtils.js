// Weather icon mapping
export const getWeatherIcon = (iconCode, size = '2x') => {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
};

// Weather condition colors
export const getWeatherColor = (main) => {
  const colors = {
    Clear: 'text-yellow-500',
    Clouds: 'text-gray-500',
    Rain: 'text-blue-500',
    Drizzle: 'text-blue-400',
    Snow: 'text-blue-200',
    Thunderstorm: 'text-purple-500',
    Mist: 'text-gray-400',
    Smoke: 'text-gray-500',
    Haze: 'text-gray-400',
    Dust: 'text-yellow-600',
    Fog: 'text-gray-400',
    Sand: 'text-yellow-600',
    Ash: 'text-gray-600',
    Squall: 'text-gray-600',
    Tornado: 'text-red-500',
  };
  return colors[main] || 'text-gray-500';
};

// Format time
export const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

// Format date
export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

// Format time for sunrise/sunset
export const formatSunTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

// Get wind direction
export const getWindDirection = (degrees) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

// Get weather description
export const getWeatherDescription = (main) => {
  const descriptions = {
    Clear: 'Clear sky',
    Clouds: 'Cloudy',
    Rain: 'Rainy',
    Drizzle: 'Light rain',
    Snow: 'Snowy',
    Thunderstorm: 'Thunderstorm',
    Mist: 'Misty',
    Smoke: 'Smoky',
    Haze: 'Hazy',
    Dust: 'Dusty',
    Fog: 'Foggy',
    Sand: 'Sandy',
    Ash: 'Ashy',
    Squall: 'Squally',
    Tornado: 'Tornado',
  };
  return descriptions[main] || main;
};

// Get UV index description
export const getUVDescription = (uv) => {
  if (uv <= 2) return { level: 'Low', color: 'text-green-500' };
  if (uv <= 5) return { level: 'Moderate', color: 'text-yellow-500' };
  if (uv <= 7) return { level: 'High', color: 'text-orange-500' };
  if (uv <= 10) return { level: 'Very High', color: 'text-red-500' };
  return { level: 'Extreme', color: 'text-purple-500' };
};

// Debounce function for search
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}; 