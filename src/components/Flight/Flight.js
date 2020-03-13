import React from "react";

import classes from "./Flight.module.css";

const flight = props => {
  const { cityFrom, cityTo, fly_duration, price, dTime, aTime, route } = props;
  const dateDepart = new Date(dTime * 1000).toDateString();
  const timeDepart = new Date(dTime * 1000).toTimeString().slice(0, 18);
  const dateArrival = new Date(aTime * 1000).toDateString().slice(0, 18);
  const timeArrival = new Date(aTime * 1000).toTimeString().slice(0, 18);

  let stopovers = null;
  if (route.length > 1) {
    stopovers = <h3 className={classes.FlightStopovers}>{route.slice(0, route.length - 1).map(stopover => stopover.cityTo)}</h3>;
  }
  return (
    <div className={classes.Flight}>
      <div>
        <h1>From: {cityFrom}</h1>
        <h2>DEPARTURE:</h2>
        <h2>{dateDepart}</h2>
        <h2>{timeDepart}</h2>
      </div>
      <div>
        <h1>To: {cityTo}</h1>
        <h2>ARRIVAL:</h2>
        <h2>{dateArrival}</h2>
        <h2>{timeArrival}</h2>
      </div>
      <h1>Duration: {fly_duration}</h1>
      <h1>Price: {price}EUR</h1>
      <div className={classes.FlightStopovers}>
        <h2>Stopovers:</h2>
        {stopovers}
      </div>
    </div>
  );
};

export default flight;
