import React from "react";

import classes from "./FlightSection.module.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";
import searchFlights from "../searchFlights";

class FlightSection extends React.Component {
  state = {
    data: [],
    loading: false,
    origin: "",
    destination: ""
  };

  componentDidUpdate(prevProps, snapshot) {
    if (prevProps.submitted !== this.props.submitted) {
      if (prevProps.direct !== this.props.direct) {
        this.getFlightsHandler();
        this.setState({ loading: true });
        return this.props.submitted;
      }
      this.getFlightsHandler();
      this.setState({ loading: true })
      return this.props.submitted;
    }
  }

  getFlightsHandler = async () => {
    const data = await searchFlights(this.props.origin, this.props.destination, this.props.direct);
    console.log(data);
    this.setState(prevState => {
      return {
        ...prevState,
        data,
        loading: false
      };
    });
  };

  render() {
    // Fligth is a Spinner while loading and then it renders as flights
    let flight = null;
    let content = <h1>Voyage, voyage</h1>;
    if (this.state.loading) {
      flight = <Spinner />;
      content = null;
    } else if (this.state.data.length === 0) {
      flight = <h1>Corona situation</h1>;
    } else {
      content = null;
      flight = this.state.data.map(flight => {
        return <Flight key={flight.id} {...flight} />;
      });
    }

    return (
      <div className={classes.FlightSection}>
        {flight}
        {content}
      </div>
    );
  }
}

export default FlightSection;
