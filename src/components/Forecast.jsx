import React, { useContext } from "react";
import { DataContext as WeatherDataContext } from "../context/WeatherDataContext.jsx";
import { getTime_HM_FromTimestamp } from "../utils/dateTime.js";

export default function Forecast() {
  const { data, loading } = useContext(WeatherDataContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="forecast" className="c">
      {data.list.slice(0,10).map((item) => {
        return <div className="Forecastentry" key={item.dt}>{getTime_HM_FromTimestamp(item.dt)}</div>;
      })}
    </div>
  );
}
