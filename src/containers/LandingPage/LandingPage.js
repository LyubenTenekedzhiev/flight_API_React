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
    this.setState(prevState => {
      return {
        flightsFrom: flightsFrom,
        flightsTo: flightsTo
      };
    });
  }

  dropDownToClickHandler = () => {
    this.setState(prevState => {
      return {
        dropdownToOpen: !prevState.dropdownToOpen
      };
    });
  };

  dropDownFromClickHandler = () => {
    this.setState(prevState => {
      return {
        dropdownFromOpen: !prevState.dropdownFromOpen
      };
    });
  };

  itemSelectFromHandler = (event) => {
    // console.log('innerText', typeof(event.target.innerText));
    const destArray = Object.entries(this.state.flightsFrom);
    const origin = destArray.filter(item => item[1] === event.target.innerText);
    console.log('value', origin[0][0])
  }

  render() {
    let destinationTo = Object.values(this.state.flightsTo);
    let destinationFrom = Object.values(this.state.flightsFrom);
    // console.log(this.state.flightsFrom);

    return (
      <div className={classes.LandingPage}>
        <div className={classes.LandingPageTitle}>
          <h1>title goes here and maybe an image</h1>
          <h2>Searchbars for flights</h2>
          <div className={classes.Dropdown}>
            <SearchBarFrom
              flightsFrom={destinationFrom}
              dropdownOpen={this.state.dropdownFromOpen}
              dropDownClickHandler={this.dropDownFromClickHandler}
              itemSelectHandler={this.itemSelectHandler}
            >
              From
            </SearchBarFrom>
            <SearchBarTo
              flightsTo={destinationTo}
              dropdownOpen={this.state.dropdownToOpen}
              dropDownClickHandler={this.dropDownToClickHandler}
            >
              To
            </SearchBarTo>
          </div>
        </div>
        <FlightSection origin={origin[0][0]} />
      </div>
    );
  }
}

export default LandingPage;
