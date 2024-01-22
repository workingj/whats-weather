import { useContext, useState } from "react";
import "./App.css";
import Text from "./components/Text";

import { PiCloud, PiCloudMoon, PiCloudSun, PiSun } from "react-icons/pi";
import { DataContext as WeatherDataContext } from "./context/WeatherDataContext";

function App() {
  const [count, setCount] = useState(0);
  const { loading, data } = useContext(WeatherDataContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  const now = Date.now();

  let daytime = false;
  if (now > data.sys.sunrise || now < data.sys.sunrise) {
    daytime = true;
  }
  let weatherClass;
  if (data.weather[0].main === "Rain") {
    daytime ? weatherClass = "rainyDay" : "rainyNight";
  } else if (data.weather[0].main === "Clouds") {
    daytime ? weatherClass = "cloudyDay" : "cloudyNight";
  } else if (data.weather[0].main === "Clear") {
    daytime ? weatherClass = "sunnyDay" : "clearNight";
  } else if (data.weather[0].main === "Snow") {
    daytime ? weatherClass = "snowyDay" : "snowyNight";
  }

  return (
    <main className={weatherClass}>
      <h1>Whatsweather</h1>

      <div id="main" className="c">
        main
      </div>
      <div id="forecast" className="c">
        forcast
        <div></div>
      </div>
      <div>
        <div>
          <PiCloud size={"3rem"} />
          <PiCloudMoon size={"3rem"} />
          <PiCloudSun size={"3rem"} />
          <PiSun size={"3rem"} />
          {/* https://react-icons.github.io/react-icons/icons/pi/ */}
        </div>
      </div>
      <Text />
    </main>
  );
}

export default App;
