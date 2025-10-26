import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import { API_URL } from "../../../config";

export default function Search({setWatchList}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}&q=${searchTerm}`);
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      setCityData(data || null);
    } catch (err) {
      setError(err.message);
      setCityData(null);
    } finally {
      setSearchTerm("");
    }
  };

  const handleAddToWatchlist = () => {
    setWatchList((prev) => [
      ...new Set([...prev, cityData?.location?.name]),
    ]);
    setCityData(null);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a city..."
        className="w-[50%] ml-[20%] my-5 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
      />
      <button
        className="px-2 py-2 bg-blue-500 text-white rounded ml-2 disabled:opacity-50"
        onClick={handleSearch}
        disabled={!searchTerm.trim()}
      >
        Search
      </button>

      {!cityData && error && (
        <div className="text-center mt-4">
          <p className="text-gray-600">
            {`${error}`}
          </p>
        </div>
      )}

      {cityData && (
        <div className="flex items-center justify-between mt-4 mx-500 p-4 border border-gray-300 rounded">
          <div className="flex-1 flex items-center">
            <h3 className="text-xl font-bold mb-0 mr-2">
              {cityData?.location?.name}, {cityData?.location?.country}
            </h3>
            <p className="mb-0 mr-2">
              Temperature: {cityData.current.temp_c}°C
            </p>
            <p className="mb-0 mr-2">
              Condition: {cityData.current.condition.text}
            </p>
            <p className="mb-0 mr-2">Humidity: {cityData.current.humidity}%</p>
            <p className="mb-0">Wind: {cityData.current.wind_kph} kph</p>
          </div>
          <button
            className="ml-4 p-2 bg-blue-500 text-white"
            title="Add to watchlist"
            onClick={handleAddToWatchlist}
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
