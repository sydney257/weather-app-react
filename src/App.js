import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <Weather />
      <p className="credentials">
        <a
          href="https://github.com/sydney257/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code
        </a>{" "}
        by Sydney Mercado from <a href="https://shecodes.io">SheCodes</a>
      </p>
    </div>
  );
}

export default App;
