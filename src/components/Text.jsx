import React from "react";
import getJoke from "../utils/jokes";

export default function Text() {
  const joke = getJoke();
  return (
    <div id="text" className="c">
      <p>
        <b>Q:</b>
        {joke.Q}
        <br />
        <b>A:</b>
        {joke.A}
      </p>
    </div>
  );
}
