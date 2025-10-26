import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";

function MainContent() {
  const [watchList, setWatchList] = useState([]);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center pt-10 pb-5 px-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to WeatherNow 🌍
        </h1>
        <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Designed for travel enthusiasts who love exploring the world with
          confidence. WeatherNow helps you stay ahead of changing conditions —
          search any city, view live forecasts, and build a personalized
          watchlist to plan your journeys with weather-conscious decisions.
        </p>
      </div>
      <Search setWatchList={setWatchList}/>
      <Table watchList={watchList} setWatchList={setWatchList} />
    </>
  );
}

export default MainContent;
