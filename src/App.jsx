import { useState } from "react";
import "./App.css";

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
      <div id="text" className="c">
        <p>
          <b>Q:</b>How do hurricanes see? <br /> <b>A:</b> With one eye!
        </p>
      </div>
    </main>
  );
}

export default App;
