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
    <div className="detail">
      <h4>Temperature: {tempCelsius.toFixed(2)} °C</h4>
      <h4>Weather: {weatherDescription}</h4>
      <h4>Date: {currentDate}</h4>
      <h4>Time: {currentTime}</h4>
    </div>
  );
}

export default WeatherDetailsComponent;
