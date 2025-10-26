import React, {useState} from "react";

function Navbar({ isDarkTheme, setIsDarkTheme }) {

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
    <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
      WeatherNow
    </div>
  
    <label className="relative inline-flex items-center cursor-pointer ml-4">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDarkTheme}
          onChange={() => setIsDarkTheme(!isDarkTheme)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-gray-700 rounded-full peer dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
        </span>
      </label>
  </nav>
  
  );
}

export default Navbar;