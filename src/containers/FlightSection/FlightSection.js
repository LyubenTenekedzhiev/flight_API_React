import React from "react";

import classes from "./FlightSection.module.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";
import searchFlights from "../searchFlights";

class FlightSection extends React.Component {
  state = {
    cityFrom: "",
    cityTo: ""
  };

  async componentDidMount() {
    const data = await searchFlights();
    console.log(data);
    this.setState(prevState => {
      return {
        ...prevState,
        cityFrom: data[0].cityFrom
      };
    });
  }

  render() {
    console.log(this.state.cityFrom);
    return (
      <div className={classes.FlightSection}>
        <Flight />
        <Spinner />
      </div>
    );
  }
}

export default FlightSection;
