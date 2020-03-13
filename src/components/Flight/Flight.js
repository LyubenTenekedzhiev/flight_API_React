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
    stopovers = (
      <h3 className={classes.FlightStopovers}>
        {route.slice(0, route.length - 1).map(stopover => stopover.cityTo)}
      </h3>
    );
  }

  return (
    <div className={classes.Flight}>
      <div>
        <h1>{cityFrom}</h1>
        <h3>Departure:</h3>
        <h4>{dateDepart}</h4>
        <h4>{timeDepart}</h4>
      </div>
      <div>
        <h1>{cityTo}</h1>
        <h3>Arrival:</h3>
        <h4>{dateArrival}</h4>
        <h4>{timeArrival}</h4>
      </div>
      <div>
        <h3>Duration:</h3>
        <h4>{fly_duration}</h4>
      </div>
      <div>
        <h3>Price:</h3>
        <h4>€{price}</h4>
      </div>
      <div className={classes.FlightStopovers}>
        <h3>Stopovers:</h3>
        <h4>{stopovers}</h4>
      </div>
    </div>
  );
};

export default flight;
