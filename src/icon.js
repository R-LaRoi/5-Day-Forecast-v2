import React from "react";
import {
  WiCloudy,
  WiRaindrops,
  WiThunderstorm,
  WiSnowflakeCold,
  WiFog,
  WiDaySunnyOvercast,
} from "weather-icons-react";

export default function Icon(props) {
  console.log(props.code);
  const mapIcon = {
    "01d": WiDaySunnyOvercast,
    "02d": WiDaySunnyOvercast,
    "03d": WiCloudy,
    "04d": WiCloudy,
    "09d": WiRaindrops,
    "10d": WiRaindrops,
    "11d": WiThunderstorm,
    "13d": WiSnowflakeCold,
    "50d": WiFog,
    "01n": WiDaySunnyOvercast,
    "02n": WiDaySunnyOvercast,
    "03n": WiCloudy,
    "04n": WiCloudy,
    "09n": WiRaindrops,
    "10n": WiRaindrops,
    "11n": WiThunderstorm,
    "13n": WiSnowflakeCold,
    "50n": WiFog,
  };

  if (props.code.includes("02d", "02n", "01d", "01n"))
    return <WiDaySunnyOvercast size={80} color="#b6a8a1" />;
  if (props.code.includes("50d", "50n"))
    return <WiFog size={80} color="#b6a8a1" />;
  if (props.code.includes("13d", "13n"))
    return <WiSnowflakeCold size={80} color="#b6a8a1" />;
  if (props.code.includes("11d", "11n"))
    return <WiThunderstorm size={80} color="#b6a8a1" />;
  if (props.code.includes("10d", "10n", "09n", "09d"))
    return <WiRaindrops size={80} color="#b6a8a1" />;
  else props.code.includes("03d", "03n", "04d", "04n");
  return <WiCloudy size={80} color="#b6a8a1" />;
}
