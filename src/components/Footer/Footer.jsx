import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-700 text-center p-4 shadow-inner mt-8 fixed bottom-0 left-0 w-full">
      <p className="text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} WeatherNow. All rights reserved.
      </p>
    </footer>
  );
}