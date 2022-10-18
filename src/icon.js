import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  if (props.pic === "01d")
    return (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={64}
        animate={true}
      />
    );
}
