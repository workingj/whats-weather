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
  console.log(data);

  return (
    <main>
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
