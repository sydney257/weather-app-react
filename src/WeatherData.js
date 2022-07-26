import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="city">
        <h1>{props.data.city}</h1>
      </div>
      <div>
        Last updated:{" "}
        <span className="date">
          <FormattedDate date={props.data.date} />
        </span>
      </div>
      <div className="text-capitalize">{props.data.description}</div>
      <div className="row">
        <div className="col-6">
          <h2 className="weather-temperature">
            <WeatherIcon code={props.data.icon} size={50} />
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </h2>
        </div>
        <div className="col-6">
          <ul className="metrics">
            <li>
              Wind: <span>{Math.round(props.data.wind)}</span> mph
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
