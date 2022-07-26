import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span>{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </span>
  );
}
