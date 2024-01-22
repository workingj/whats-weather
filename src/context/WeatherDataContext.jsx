import React from 'react'
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const DataContext = createContext();

export default function WeatherDataContext({children}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0ffc61535e91922b0419673f2dcaaf95"
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
            loading
        }}
    >
        {children}
    </DataContext.Provider>
  )
}
