import React from "react";

import classes from "./LandingPage.module.css";
import FlightSection from "../FlightSection/FlightSection";
import SearchBar from "../../components/UI/SearchBars/SearchBars";

class LandingPage extends React.Component {
  state = {
    dropdownOpen: false
  };

  dropDownClickHandler = event => {
    console.log("event", event.target.innerText);
    this.setState(prevState => {
      return {
        dropdownOpen: !prevState.dropdownOpen
      };
    });
  };

  render() {
    return (
      <div className={classes.LandingPage}>
        <div className={classes.LandingPageTitle}>
          <h1>title goes here and maybe an image</h1>
          <h2>Searchbars for flights</h2>
          <div className={classes.Dropdown}>
            <SearchBar
              dropdownOpen={this.state.dropdownOpen}
              dropDownClickHandler={event => this.dropDownClickHandler(event)}
            >
              From
            </SearchBar>
            <SearchBar
              dropdownOpen={this.state.dropdownOpen}
              dropDownClickHandler={this.dropDownClickHandler}
            >
              To
            </SearchBar>
          </div>
        </div>
        <FlightSection />
      </div>
    );
  }
}

export default LandingPage;
