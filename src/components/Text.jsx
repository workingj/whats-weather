import React from "react";
import getJoke from "../utils/jokes";
const joke = getJoke();

export default function Text() {
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
