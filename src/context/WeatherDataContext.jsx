import React from 'react'
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const DataContext = createContext();

export default function WeatherDataContext({children}) {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(true);

  const lat = 52.520008;
  const lon = 13.404954;

  /* useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b29d125a8ce4887a94791a8363a2b2d6`);
        setWeatherData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b29d125a8ce4887a94791a8363a2b2d6`);
        setForecastData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching the forecast data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
    fetchForecastData();

  }, []); */

  return (

      <DataContext.Provider value={{forecastData, weatherData, loading}}>
        {children}
      </DataContext.Provider>

  )

}
