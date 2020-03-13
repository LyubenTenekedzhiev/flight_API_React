import React from "react";

import classes from "./LandingPage.module.css";
import FlightSection from "../FlightSection/FlightSection";
import SearchBarTo from "../../components/UI/SearchBars/SearchBarTo";
import SearchBarFrom from "../../components/UI/SearchBars/SearchBarFrom";
import { flightsFrom, flightsTo } from "../../Destination/destination";

class LandingPage extends React.Component {
  state = {
    dropdownToOpen: false,
    dropdownFromOpen: false,
    flightsFrom: "",
    flightsTo: ""
  };

  componentDidMount() {
    // console.log("flightsFrom", flightsFrom, "flightsTo", flightsTo);
    this.setState(prevState => {
      return {
        flightsFrom: flightsFrom,
        flightsTo: flightsTo
      };
    });
  }

  dropDownToClickHandler = () => {
    // console.log("event", event.target.innerText);
    this.setState(prevState => {
      return {
        dropdownToOpen: !prevState.dropdownToOpen
      };
    });
  };

  dropDownFromClickHandler = () => {
    // console.log("event", event.target.innerText);
    this.setState(prevState => {
      return {
        dropdownFromOpen: !prevState.dropdownFromOpen
      };
    });
  };

  render() {
    let destinationTo = Object.values(this.state.flightsTo);
    let destinationFrom = Object.values(this.state.flightsFrom);
    console.log(destinationFrom);

    return (
      <div className={classes.LandingPage}>
        <div className={classes.LandingPageTitle}>
          <h1>title goes here and maybe an image</h1>
          <h2>Searchbars for flights</h2>
          <div className={classes.Dropdown}>
            <SearchBarFrom
              flightsFrom={destinationFrom}
              dropdownOpen={this.state.dropdownFromOpen}
              dropDownClickHandler={this.dropDownToClickHandler}
            >
              From
            </SearchBarFrom>
            <SearchBarTo flightsTo={destinationTo} dropdownOpen={this.state.dropdownToOpen} dropDownClickHandler={this.dropDownFromClickHandler}>
              To
            </SearchBarTo>
          </div>
        </div>
        <FlightSection />
      </div>
    );
  }
}

export default LandingPage;
