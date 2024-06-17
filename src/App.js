import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/bruna-righesso-23175622/"
            target="_blank"
          >
            Bruna Righesso
          </a>{" "}
          and is open sourced{" "}
          <a
            href="https://github.com/brunarighesso/react-final-project"
            target="_blank"
          >
            on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
