import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <Weather defaultCity="San Francisco" />
      <p className="credentials">
        <a
          href="https://github.com/sydney257/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code
        </a>{" "}
        by Sydney Mercado, hosted on{" "}
        <a href="https://netlify.com" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
