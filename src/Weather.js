import React from "react";

import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "San Francisco",
    temperature: 18,
    day: "Friday",
    time: "14:56",
    description: "Clouds",
    imgUrl: "http://openweathermap.org/img/wn/03d@2x.png",
    humidity: 66,
    wind: 7,
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="wrapper">
          <div>
            <form className="search-form">
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control searching"
                    type="search"
                    placeholder="Search for a city..."
                    autoComplete="off"
                    autoFocus="on"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm w-100"
                  />
                </div>
                <div className="col-3">
                  <button className="currently-btn btn btn-success w-100">
                    Currently
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="Overview">
            <div className="city">
              <h1>{weatherData.city}</h1>
            </div>
            <div>
              Last updated: <span className="date">{weatherData.day} </span>
              <span className="time">{weatherData.time}</span>
            </div>
            <div>{weatherData.description}</div>
            <h2 className="weather-temperature">
              <img
                src={weatherData.imgUrl}
                className="icon"
                alt={weatherData.description}
              />
              <span>{weatherData.temperature}</span>
              <span className="unit">
                <a href="/" className="active">
                  °C
                </a>
                |<a href="/">°F</a>
              </span>
            </h2>
            <ul className="metrics">
              <li>
                Wind: <span>{weatherData.wind}</span> m/s
              </li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
