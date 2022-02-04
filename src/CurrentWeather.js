import React from "react";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-4">
        <div className="cityName">{props.city}</div>
        <div>{props.time}</div>
        <span className="currentDegree">{props.degree}</span>
        <span className="degrees">
          <a href=" " className="active">
            °C{" "}
          </a>
          |<a href=" "> F</a>
        </span>
      </div>
      <div className="col-6">
        <div className="description clearfix">
          <img
            src="http://openweathermap.org/img/wn/03d@2x.png"
            width="100px"
            id="weatherIcon"
            alt="weather icon"
          />
          <span className=" descriptionfloat-left"> {props.description}</span>
        </div>
        <p className="specification">
          <strong>Wind:</strong> {props.wind} km/h
          <br />
          <strong>Humidity:</strong> {props.humidity}%
        </p>
      </div>
    </div>
  );
}
