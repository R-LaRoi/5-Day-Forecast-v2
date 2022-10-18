import React from "react";

export default function Timestamp(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log(props.date);
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {day} {""} | {""}
      {""}
      {hours}:{minutes}
    </div>
  );
}
