import React from 'react';

import classes from './LandingPage.module.css';
import FlightSection from '../FlightSection/FlightSection';

const landingPage = ( props ) => {
  return (
    <div className={classes.LandingPage}>
      <div className={classes.LandingPageTitle}>
        <h1>title goes here and maybe an image</h1>
        <h2>Searchbars for flights</h2>
      </div>
      <FlightSection />
    </div>
  )
}

export default landingPage;