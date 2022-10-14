import React, { useState } from "react";
import "./layout.css";
import axios from "axios";

export default function Searchcity() {
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState("");

  function getCity(event) {
    setCity(event.target.value);
  }

  function showForecast(response) {
    setResults(response.data.main.temp);
  }

  function getOpenWeather(event) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43564c91a6c605aeb564c9ed02e3858&units=metric`;

    event.preventDefault();
    axios.get(apiUrl).then(showForecast);
  }

  return (
    <div className="newforecast">
      <h1>{results}</h1>
      <div>Rain</div> {""}
      <span>wind</span> {""}
      <span>humidity</span>
      {""}
      <h2>Nairobi</h2>
      <form onSubmit={getOpenWeather}>
        <input type="search" placeholder="enter a city" onChange={getCity} />
        <input className="button" type="submit" value="search" />
      </form>
    </div>
  );
}
