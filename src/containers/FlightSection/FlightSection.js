import React from "react";

import classes from "./FlightSection.module.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";
import searchFlights from "../searchFlights";
import { flightsFrom, flightsTo} from "../../Destination/destination"

console.log("flightsFrom", flightsFrom, "flightsTo", flightsTo)

class FlightSection extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const data = await searchFlights();
    this.setState(prevState => {
      return {
        ...prevState,
        data: prevState.data.concat(data),
        loading: false,
      };
    });
    console.log(data);
  }

  render() {
    console.log(this.state.data);

    // Fligth is a Spinner while loading and then it renders as flights
    let flight = null;
    if(this.state.loading) {
      flight = <Spinner />
    } else {
      flight = this.state.data.map(flight => {
        return <Flight key={flight.id} {...flight} />
      })
    }

    return (
      <div className={classes.FlightSection}>
        {flight}
      </div>
    );
  }
}

export default FlightSection;
