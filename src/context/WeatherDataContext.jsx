import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export default function WeatherDataContext({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=52.03&lon=8.53&appid=2457f6e3daad00f3b011c6365dd3c430"
        );
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
