import React from 'react';

const UnitToggle = ({ unit, toggleUnit }) => {
  return (
    <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
      <button
        onClick={() => toggleUnit()}
        className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          unit === 'metric'
            ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        °C
      </button>
      <button
        onClick={() => toggleUnit()}
        className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          unit === 'imperial'
            ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle; 