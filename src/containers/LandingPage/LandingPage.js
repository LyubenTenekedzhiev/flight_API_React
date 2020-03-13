import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import classes from "./LandingPage.module.css";
import FlightSection from "../FlightSection/FlightSection";

class LandingPage extends React.Component {
  state = {
    dropdownOpen: false
  };

  dropDownClickHandler = () => {
    this.setState(prevState => {
      return {
        dropdownOpen: !prevState.dropdownOpen
      }
    })
  }

  render() {
    return (
      <div className={classes.LandingPage}>
        <div className={classes.LandingPageTitle}>
          <h1>title goes here and maybe an image</h1>
          <h2>Searchbars for flights</h2>

          {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropDownClickHandler}>
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
          </Dropdown> */}

        </div>
        <FlightSection />
      </div>
    );
  }
}

export default LandingPage;
