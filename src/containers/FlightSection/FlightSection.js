import React from "react";

import classes from "./FlightSection.module.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";
import searchFlights from "../searchFlights";

class FlightSection extends React.Component {
  state = {
    data: [],
    loading: true,
    origin: "",
    destination: ""
  };
  
  componentDidUpdate(prevProps, snapshot) {
    if(prevProps.submitted !== this.props.submitted) {
      this.getFlightsHandler();
      return this.props.submitted;
    }
  }

  getFlightsHandler = async () => {
    const data = await searchFlights(this.props.origin, this.props.destination);
    this.setState(prevState => {
      return {
        ...prevState,
        data: prevState.data.concat(data),
        loading: false
      };
    });
  };

  render() {
    // Fligth is a Spinner while loading and then it renders as flights
    let flight = null;
    if (this.state.loading) {
      flight = <Spinner />;
    } else if(this.state.data.length === 0) {
      flight = <h1>Corono situation</h1>
    } else {
      flight = this.state.data.map(flight => {
        return <Flight key={flight.id} {...flight} />;
      });
    }

    return <div className={classes.FlightSection}>{flight}</div>;
  }
}

export default FlightSection;
