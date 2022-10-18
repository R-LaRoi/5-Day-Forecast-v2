import React, { useState } from "react";

export default function Degrees(props) {
  const [unit, setUnit] = useState("celsius");

  function convert(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius")
    return (
      <div className="col-4">
        <h1 className="celsius">{Math.round(props.celsius)}</h1>
        <span className="units">
          <a href="#" onClick={showCelsius}>
            °C | &nbsp;
          </a>
          <a href="#" onClick={convert}>
            °F
          </a>
        </span>
      </div>
    );
  else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="col-4">
        <h1 className="celsius">{Math.round(fahrenheit)}</h1>
        <span className="units">
          {" "}
          <a href="#" onClick={showCelsius}>
            °C |{" "}
          </a>
          <a href="#" onClick={convert}>
            &nbsp;°F
          </a>
        </span>
      </div>
    );
  }
}
