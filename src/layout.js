import React, { useState } from "react";
import "./layout.css";
import axios from "axios";

export default function Layout() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState("");
  const [display, setDisplay] = useState(false);

  function getCity(event) {
    setCity(event.target.value);
  }

  function showForecast(response) {
    setDisplay(true);
    setResults({
      temp: response.data.main.temp,
      name: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      describe: response.data.weather[0].main,
    });
  }

  function getOpenWeather(event) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43564c91a6c605aeb564c9ed02e3858&units=metric`;

    event.preventDefault();
    axios.get(apiUrl).then(showForecast);
  }
  if (display) {
    return (
      <div className="forecast">
        <div className="card">
          <div className="card-body">
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="time">day/time</div>

                  <br />
                  <div>
                    <img
                      src="http://openweathermap.org/img/wn/04n@2x.png"
                      alt="weather icon"
                    ></img>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <ul className="desrcibe" id="des">
                          {results.describe}
                        </ul>
                      </div>
                      <div className="col-4">
                        <h1 className="celsius">{Math.round(results.temp)}°</h1>
                      </div>

                      <div className="col-4">
                        <ul className="wind">
                          <div className="humidity">
                            Humidity: {""}
                            {Math.round(results.humidity)}%
                          </div>

                          <div>
                            Wind: {""}
                            {""}
                            {Math.round(results.wind)}kmH
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {""}
                  <div className="row justify-content-end" id="wind"></div>
                </div>
                <div className="location">
                  <h2>{results.name}</h2>
                </div>
                <br />
                <form onSubmit={getOpenWeather}>
                  <input
                    type="search"
                    placeholder="enter a city"
                    onChange={getCity}
                  />
                  <input className="button" type="submit" value="search" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="forecast">
        <div className="card">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div>day/time</div>
                  <br />
                  <div>
                    <img
                      src="http://openweathermap.org/img/wn/04n@2x.png"
                      alt="weather icon"
                    ></img>
                  </div>

                  {""}
                  <h3>Search city for weather</h3>
                  <br />
                  <form onSubmit={getOpenWeather}>
                    <input
                      type="search"
                      placeholder="enter a city"
                      onChange={getCity}
                    />
                    <input className="button" type="submit" value="search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
