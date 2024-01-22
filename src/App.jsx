import { useState } from "react";
import "./App.css";
import Text from "./components/Text";
import {
  FaCloud,
  FaCloudRain,
  FaCloudSun,
  FaCloudMeatball,
} from "react-icons/fa";
import { LuCloud, LuCloudy, LuDroplets, LuSun } from "react-icons/lu";
import { PiCloud, PiCloudMoon, PiCloudSun, PiSun } from "react-icons/pi";
import {
  WiDayCloudy,
  WiDaySunnyOvercast,
  WiDayRainMix,
  WiDayCloudyHigh,
} from "react-icons/wi";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Whatsweather</h1>
      <div>
        <FaCloud color={"blue"} />
        <FaCloudRain size={"3rem"} />
        <FaCloudSun size={"3rem"} />
        <FaCloudMeatball size={"3rem"} />
      </div>
      <div id="main" className="c">
        main
        <div>
          <LuCloud size={"3rem"} />
          <LuCloudy size={"3rem"} />
          <LuDroplets size={"3rem"} />
          <LuSun size={"3rem"} />
        </div>
      </div>
      <div id="forecast" className="c">
        forcast
        <div>
          <WiDayCloudy size={"3rem"} />
          <WiDayCloudyHigh size={"3rem"} />
          <WiDayRainMix size={"3rem"} color={"red"} />
          <WiDaySunnyOvercast size={"3rem"} color={"green"} />
          {/* https://react-icons.github.io/react-icons/icons/wi/ */}
        </div>
      </div>
      <Text />
          <PiCloud size={"3rem"} />
          <PiCloudMoon size={"3rem"} />
          <PiCloudSun size={"3rem"} />
          <PiSun size={"3rem"} />
        </div>
      </div>
    </main>
  );
}

export default App;
