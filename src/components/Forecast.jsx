import React, { useContext } from "react";
import { DataContext } from "../context/WeatherDataContext.jsx";
import { getTime_HM_FromTimestamp } from "../utils/dateTime.js";

export default function Forecast() {
  const { forecastData, loading } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="forecast" className="c">
      {forecastData.list &&
        forecastData.list.slice(0, 12).map((item) => {
          return (
            <div className="Forecastentry" key={item.dt}>
              <span>
              {getTime_HM_FromTimestamp(item.dt)}
              </span>
              <br />
              <span>
                {(item.main.temp - 273.15).toFixed(2) + "°C"}
              </span>
            </div>
          );
        })}
    </div>
  );
}
