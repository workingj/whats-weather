import { useState } from "react";
import "./App.css";
import Text from "./components/Text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Whatsweather</h1>
      <div id="main" className="c">
        main
      </div>
      <div id="forecast" className="c">
        forcast
      </div>
      <Text />
    </main>
  );
}

export default App;
