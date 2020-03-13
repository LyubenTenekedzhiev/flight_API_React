import React from 'react';

import classes from './FlightSection.module.css';
import Flight from './../../components/Flight/Flight';
import Spinner from '../../components/UI/Spinner/Spinner';


class FlightSection extends React.Component {
  render() {
    return (
      <div className={classes.FlightSection}>
        <Flight />
        <Spinner />
      </div>
    )
  }
}

export default FlightSection;