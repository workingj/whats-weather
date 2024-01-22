import { useContext, useState } from "react";
import "./App.css";
import Text from "./components/Text";
import {
  PiCloud,
  PiCloudMoon,
  PiCloudSun,
  PiSun,
  PiCloudSnowLight,
  PiCloudRainLight,
} from "react-icons/pi";
import { DataContext as WeatherDataContext } from "./context/WeatherDataContext";
import Forecast from "./components/Forecast";
import WeatherDetailsComponent from "./components/WeatherDetailsComponent";

function App() {
  const [count, setCount] = useState(0);
  const { loading, weatherData } = useContext(WeatherDataContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  const now = Date.now();

  let daytime = false;
  if (now > weatherData.sys.sunrise || now < weatherData.sys.sunrise) {
    daytime = true;
  }
  let weatherClass;
  let weatherIcon;
  if (weatherData.weather[0].main === "Rain") {
    daytime ? (weatherClass = "rainyDay") : "rainyNight";
    weatherIcon = <PiCloudRainLight size={"3rem"} />;
  } else if (weatherData.weather[0].main === "Clouds") {
    daytime ? (weatherClass = "cloudyDay") : "cloudyNight";
    weatherIcon = <PiCloud size={"3rem"} />;
  } else if (weatherData.weather[0].main === "Clear") {
    daytime ? (weatherClass = "sunnyDay") : "clearNight";
    weatherIcon = <PiSun size={"3rem"} />;
  } else if (weatherData.weather[0].main === "Snow") {
    daytime ? (weatherClass = "snowyDay") : "snowyNight";
    weatherIcon = <PiCloudSnowLight size={"3rem"} />;
  }

  return (
    <main className={weatherClass}>
      <h2>Whatsweather</h2>
      <div id="main" className="c">
        <WeatherDetailsComponent />
      </div>
      <Forecast />
      <div>
        <div>
          {weatherIcon}
          {/* https://react-icons.github.io/react-icons/icons/pi/ */}
        </div>
      </div>
      <Text />
    </main>
  );
}

export default App;
