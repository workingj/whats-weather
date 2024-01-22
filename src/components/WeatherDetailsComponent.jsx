import React, { useContext } from "react";
import { DataContext } from "../context/WeatherDataContext";

function WeatherDetailsComponent() {
  const { weatherData } = useContext(DataContext);

  const tempCelsius = weatherData.main.temp - 273.15;
  const weatherDescription = weatherData.weather[0].description; //
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  const currentTime = date.toLocaleTimeString();
  return (
    <div>
      <h2>Temperature: {tempCelsius.toFixed(2)} °C</h2>
      <h2>Weather: {weatherDescription}</h2>
      <h2>Date: {currentDate}</h2>
      <h2>Time: {currentTime}</h2>
    </div>
  );
}

export default WeatherDetailsComponent;
