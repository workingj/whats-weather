import { useState } from "react";
import "./App.css";
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
    <>
      <h1>Whatsweather</h1>
      <FaCloud color={"blue"} />
      <FaCloudRain size={"3rem"} />
      <FaCloudSun size={"3rem"} />
      <FaCloudMeatball size={"3rem"} />
      <br />
      <LuCloud size={"3rem"} />
      <LuCloudy size={"3rem"} />
      <LuDroplets size={"3rem"} />
      <LuSun size={"3rem"} />
      <br />
      <PiCloud size={"3rem"} />
      <PiCloudMoon size={"3rem"} />
      <PiCloudSun size={"3rem"} />
      <PiSun size={"3rem"} />
      <br />
      <WiDayCloudy size={"3rem"} />
      <WiDayCloudyHigh size={"3rem"} />
      <WiDayRainMix size={"3rem"} />
      <WiDaySunnyOvercast size={"3rem"} />
    </>
  );
}

export default App;
