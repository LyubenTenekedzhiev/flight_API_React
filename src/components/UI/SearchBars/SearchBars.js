import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import flightsFrom from "../../../Destination/destination";
import flightsTo from "../../../Destination/destination";

import classes from "./SearchBars.module.css";

function searchBar(props) {
  const { dropdownOpen, dropDownClickHandler, flightsFrom, flightsTo } = props;
  // const listOfDepartureAirports = flightsFrom.map();
  // const listOfArrivalAirports = flightsTo.map();

  return (
    <div className={classes.DropItem}>
      <Dropdown isOpen={dropdownOpen} toggle={dropDownClickHandler}>
        <DropdownToggle caret>{props.children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{props.children}</DropdownItem>
          {/* <DropdownItem>{flightsFrom}</DropdownItem> */}
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
          <DropdownItem>4</DropdownItem>
          <DropdownItem>5</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default searchBar;
