# Modern Weather App

A beautiful, responsive weather application built with React and Tailwind CSS that provides real-time weather information and forecasts.

## ✨ Features

### 🌤️ Weather Information
- **Current Weather**: Real-time temperature, humidity, wind speed, pressure, and more
- **Hourly Forecast**: 12-hour weather forecast with detailed metrics
- **Daily Forecast**: 5-day weather forecast with temperature ranges
- **Weather Icons**: Dynamic weather icons based on current conditions
- **Sunrise/Sunset**: Accurate sunrise and sunset times

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Clean Layout**: Modern card-based design with glass effects and gradients
- **Smooth Animations**: Loading spinners, hover effects, and transitions
- **Tailwind CSS**: Utility-first CSS framework for consistent styling

### 🔍 Search & Navigation
- **Smart Search**: Autocomplete search with common cities
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Recent Searches**: Remembers your last searched city
- **Error Handling**: User-friendly error messages with retry functionality

### ⚙️ Customization
- **Temperature Units**: Toggle between Celsius (°C) and Fahrenheit (°F)
- **Wind Speed Units**: Automatic unit conversion (km/h, mph)
- **Persistent Settings**: Your preferences are saved locally

### 🚀 Performance
- **Optimized API Calls**: Efficient data fetching with proper error handling
- **Custom Hooks**: Reusable logic for weather data and dark mode
- **Debounced Search**: Prevents excessive API calls during typing
- **Loading States**: Smooth loading indicators for better UX

## 🛠️ Technology Stack

- **React 19**: Latest React with hooks and modern patterns
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **OpenWeather API**: Reliable weather data source
- **Custom Hooks**: Reusable state management logic

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CurrentWeather.jsx
│   ├── DailyForecast.jsx
│   ├── DarkModeToggle.jsx
│   ├── ErrorMessage.jsx
│   ├── HourlyForecast.jsx
│   ├── LoadingSpinner.jsx
│   ├── SearchBox.jsx
│   └── UnitToggle.jsx
├── hooks/              # Custom React hooks
│   ├── useDarkMode.js
│   └── useWeatherData.js
├── utils/              # Utility functions
│   └── weatherUtils.js
├── App.jsx
├── WeatherApp.jsx
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🔧 Configuration

### API Key Setup

The app uses the OpenWeather API. You'll need to:

1. Sign up at [OpenWeather](https://openweathermap.org/api)
2. Get your API key
3. Replace the API key in `src/hooks/useWeatherData.js`:
```javascript
const API_KEY = "your-api-key-here";
```

## 🎨 Customization

### Colors and Themes

The app uses Tailwind CSS with custom color schemes. You can modify:

- **Primary Colors**: Update the `primary` color palette in `tailwind.config.js`
- **Weather Colors**: Customize weather condition colors in `src/utils/weatherUtils.js`
- **Dark Mode**: Adjust dark mode colors in the CSS classes

### Adding New Features

The modular structure makes it easy to add new features:

1. **New Components**: Add to `src/components/`
2. **Custom Hooks**: Add to `src/hooks/`
3. **Utilities**: Add to `src/utils/`

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Color Contrast**: High contrast ratios for readability
- **Focus Indicators**: Clear focus states for interactive elements

## 🔄 State Management

The app uses React hooks for state management:

- **useWeatherData**: Manages weather data, loading states, and API calls
- **useDarkMode**: Handles dark mode toggle and persistence

## 🎯 Performance Optimizations

- **Debounced Search**: Prevents excessive API calls
- **Memoized Components**: Optimized re-renders
- **Lazy Loading**: Components load only when needed
- **Efficient API Calls**: Single API call for current weather and forecast

## 🐛 Error Handling

- **Network Errors**: Graceful handling of API failures
- **Invalid Cities**: User-friendly error messages
- **Retry Functionality**: Easy retry for failed requests
- **Fallback States**: Appropriate UI for different error states

## 📈 Future Enhancements

Potential improvements for future versions:

- **Geolocation**: Automatic location detection
- **Weather Maps**: Interactive weather maps
- **Notifications**: Weather alerts and notifications
- **Offline Support**: PWA capabilities
- **Weather History**: Historical weather data
- **Multiple Locations**: Save favorite cities
- **Weather Widgets**: Embeddable weather widgets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **OpenWeather API**: For providing reliable weather data
- **Tailwind CSS**: For the amazing utility-first CSS framework
- **React Team**: For the incredible React library
- **Vite**: For the fast build tool

---

Built with ❤️ using React and Tailwind CSS
