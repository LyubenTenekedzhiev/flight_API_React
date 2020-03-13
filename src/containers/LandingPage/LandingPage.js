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
<<<<<<< HEAD
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
=======

          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropDownClickHandler}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>

>>>>>>> a71b611646fab83409eb1480e170304837002fd9
        </div>
        <FlightSection />
      </div>
    );
  }
}

export default LandingPage;
