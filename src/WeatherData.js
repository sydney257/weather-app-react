import React from "react";
import FormattedDate from "./FormattedDate";

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
      <h2 className="weather-temperature">
        <img
          src={props.data.icon}
          className="icon"
          alt={props.data.description}
        />
        <span>{Math.round(props.data.temperature)}</span>
        <span className="unit">
          <a href="/" className="active">
            °C
          </a>
          |<a href="/">°F</a>
        </span>
      </h2>
      <ul className="metrics">
        <li>
          Wind: <span>{Math.round(props.data.wind)}</span> m/s
        </li>
        <li>
          Humidity: <span>{props.data.humidity}</span>%
        </li>
      </ul>
    </div>
  );
}
