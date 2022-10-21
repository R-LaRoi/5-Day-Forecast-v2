import React, { useState, useEffect } from "react";
import axios from "axios";
import "./fiveday.css";
import Wkday from "./wkday";

// 5 DAY FORECAST Step 1
// create a new parent Component function. FiveDay
// return( <-grid CSS layout to ensure the component is working )
// create a closure function showFiveDay
// setup the API , get url and axios

// Step 2 URL SETUP/ API link requires lon/lat coords. In order to retrieve
// the coordinates of the city, return to parent component Layout and
//see ---> the showWeather function. showForecast calls the data from the weather API{} using useState.
// include the coord data to the function ie. -- (coordinates: response.data.coord,)
//

// Step 3 Add the (props) value to FiveDay Component. The props contain the coordinates set in the showForecast function --->  <FiveDay coordinates={results.coordinates} />
//this allows for the coords to be stored in the FiveDay function.

//  Step 4 - Set props in main component -->FiveDay(props) and add props to the API LINK
//`https://api.openweathermap.org/data/3.0/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lat}&appid=${apiKey}&units=metric` < -- console.log(response.data) to ensure the link is working

// Step 5 - Need to show forecast after call is made. Using {useState} variables, and conditional rendering.

//setVariable to say "if"/when api call is made render the  forecast  else / render null.  if(call===true) show forecast.

//Note: state is how you store the content, because (response) will not work out the function. using 'set...' allows access to the data. see ln:35,35

export default function FiveDay(props) {
  const [forecast, setForecast] = useState("");
  const [call, setCall] = useState(false);

  useEffect(() => {
    setCall(false);
  }, [props.coordinates]);

  function showFiveDay(response) {
    setForecast(response.data.daily);
    setCall(true);
  }

  if (call) {
    console.log(forecast);
    return (
      <div className="forecast">
        <div className="container text-center">
          <div className="row" id="seven">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <Wkday data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a43564c91a6c605aeb564c9ed02e3858";
    let apiLink = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lat}&appid=${apiKey}&units=imperial`;

    axios.get(apiLink).then(showFiveDay);

    return null;
  }
}
