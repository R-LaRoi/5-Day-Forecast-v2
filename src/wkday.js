import React from "react";

export default function Wkday(props) {
  function maxtemp() {
    let max = Math.round(props.data.temp.max);
    return `${max}°`;
  }

  function mintemp() {
    let min = Math.round(props.data.temp.min);
    return `${min}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="row" id="seven">
      <div className="col">
        <div className="day">{day()}</div>
        <div className="hightemp">{maxtemp()}</div>
        <div className="icon">{props.data.weather[0].icon}</div>
        <div className="lowtemp">{mintemp()}</div>
      </div>
    </div>
  );
}
