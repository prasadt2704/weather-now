import React, { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function Table({ watchList, setWatchList }) {
  const [tableData, setTableData] = useState([]);
  const [filterTableData, setFilterTableData] = useState([]);
  const [countries, setCountries] = useState([]); // State for countries
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await Promise.all(
        watchList.map(async (city) => {
          const response = await fetch(`${API_URL}&q=${city}`);
          const result = await response.json();

          setCountries((prev) => [
            ...new Set([...prev, result.location.country]),
          ]);
          return {
            name: result.location.name,
            country: result.location.country,
            temperature: result.current.temp_c,
            condition: result.current.condition.text,
            humidity: result.current.humidity,
          };
        })
      );
      console.log("Fetched Data:", data);
      setTableData(data);
      setFilterTableData(data); // Initialize filterTableData with the fetched data
    };

    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 300000); // Fetch data every 5 minutes

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [watchList]);

  const handleSortAZ = () => {
    const sortedData = [...filterTableData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilterTableData(sortedData);
  };

  const handleSortZA = () => {
    const sortedData = [...filterTableData].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setFilterTableData(sortedData);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filterByCountry = (country) => {
    const filteredData = tableData.filter((city) => city.country === country);
    setFilterTableData(filteredData);
    setIsDropdownOpen(false);
  };

  const clearFilter = () => {
    setFilterTableData(tableData);
    setIsDropdownOpen(false);
  };

  const handleDelete = (cityName) => {
    const updatedTableData = tableData.filter((city) => city.name !== cityName);
    setTableData(updatedTableData);
    setFilterTableData(updatedTableData);
    setWatchList((prev) => prev.filter((city) => city !== cityName));
  };

  return (
    <>
      <div className="flex justify-center mb-4 ">
        <button
          onClick={toggleDropdown}
          className="mr-2 p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Filter by Country
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 w-100 bg-white border border-gray-300 rounded shadow-lg z-10 left-7.5">
            {countries.length > 0 ? (
              <ul className="py-1">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black border-b"
                  onClick={clearFilter}
                >
                  Clear Filter
                </li>
                {countries.map((country, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark: text-black"
                    onClick={() => filterByCountry(country)}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-2 text-gray-500">
                No countries available
              </div>
            )}
          </div>
        )}

        <button
          disabled={filterTableData.length === 0}
          onClick={handleSortAZ}
          className="mr-2 p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Sort A - Z
        </button>
        <button
          disabled={filterTableData.length === 0}
          onClick={handleSortZA}
          className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Sort Z - A
        </button>
      </div>

      <div className="overflow-x-auto mx-5">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                City
              </th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Country
              </th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Temperature
              </th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Condition
              </th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Humidity
              </th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filterTableData.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="py-2 text-center text-gray-700 dark:text-gray-300"
                >
                  No data available
                </td>
              </tr>
            ) : (
              filterTableData.map((city, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                    {city.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                    {city.country}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                    {city.temperature} °C
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                    {city.condition}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                    {city.humidity}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                    <button
                      onClick={() => handleDelete(city.name)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
