import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.loaded) {
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
                Last updated:{" "}
                <span className="date">
                  <FormattedDate date={weatherData.date} />
                </span>
              </div>
              <div className="text-capitalize">{weatherData.description}</div>
              <h2 className="weather-temperature">
                <img
                  src={weatherData.icon}
                  className="icon"
                  alt={weatherData.description}
                />
                <span>{Math.round(weatherData.temperature)}</span>
                <span className="unit">
                  <a href="/" className="active">
                    °C
                  </a>
                  |<a href="/">°F</a>
                </span>
              </h2>
              <ul className="metrics">
                <li>
                  Wind: <span>{Math.round(weatherData.wind)}</span> m/s
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
  } else {
    const apiKey = "00939d96c9ed68ecdd1c51c91405f4e5";
    let city = "San Francisco";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
