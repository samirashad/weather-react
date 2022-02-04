import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(main(), rootElement);

function main() {
  return (
    <div className="container">
      <div className="main">
        <Search />
        <CurrentWeather
          city="Mashhad"
          degree={3}
          time="Tuesday 12:30"
          description="scattered"
          wind={10}
          humidity={76}
        />
      </div>
    </div>
  );
}
