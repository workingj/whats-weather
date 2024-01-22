import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// const url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

// const url2 = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0ffc61535e91922b0419673f2dcaaf95";

export const DataContext = createContext();

export default function WeatherDataContext({ children }) {
  const lat = 52.520008;
  const lon = 13.404954;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b29d125a8ce4887a94791a8363a2b2d6`;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
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
