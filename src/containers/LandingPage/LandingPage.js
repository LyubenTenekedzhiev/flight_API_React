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
    flightsTo: "",
    destination: "",
    originFrom: "",
    submitted: false,
    direct: 2
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

  itemSelectFromHandler = event => {
    const destArray = Object.entries(this.state.flightsFrom);
    const originFrom = destArray.filter(item => item[1] === event.target.innerText);
    this.setState({ originFrom: originFrom[0][0] });
  };

  itemSelectToHandler = event => {
    const destArray = Object.entries(this.state.flightsTo);
    const destination = destArray.filter(item => item[1] === event.target.innerText);
    this.setState({ destination: destination[0][0] });
  };

  directFlightsClickHandler = event => {
    if (event.target.checked) {
      this.setState({ direct: 0 });
    } else {
      this.setState({ direct: 2 });
    }
  };

  submitDataHandler = () => {
    this.setState({ submitted: !this.state.submitted });
  };

  render() {
    let destinationTo = Object.values(this.state.flightsTo);
    let destinationFrom = Object.values(this.state.flightsFrom);

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
              itemSelectFromHandler={this.itemSelectFromHandler}
            >
              From
            </SearchBarFrom>
            <SearchBarTo
              flightsTo={destinationTo}
              dropdownOpen={this.state.dropdownToOpen}
              dropDownClickHandler={this.dropDownToClickHandler}
              itemSelectToHandler={this.itemSelectToHandler}
            >
              To
            </SearchBarTo>
            <button onClick={this.submitDataHandler}>Submit</button>
            <label>Direct flights only:</label>
            <input type='checkbox' onChange={this.directFlightsClickHandler} />
          </div>
        </div>
        <FlightSection
          origin={this.state.originFrom}
          destination={this.state.destination}
          submitted={this.state.submitted}
          direct={this.state.direct}
        />
      </div>
    );
  }
}

export default LandingPage;
