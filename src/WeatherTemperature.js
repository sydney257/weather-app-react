import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span>{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span>{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
