import React from "react";

import classes from "./FlightSection.module.css";
import Flight from "./../../components/Flight/Flight";
import Spinner from "../../components/UI/Spinner/Spinner";
import searchFlights from "../searchFlights";
import { flightsFrom, flightsTo} from "../../Destination/destination"

console.log("flightsFrom", flightsFrom, "flightsTo", flightsTo)

class FlightSection extends React.Component {
  state = {
<<<<<<< HEAD
    cityFrom: "",
    cityTo: ""
=======
    data: [],
    loading: true,
>>>>>>> a71b611646fab83409eb1480e170304837002fd9
  };

  async componentDidMount() {
    const data = await searchFlights();
    this.setState(prevState => {
      return {
        ...prevState,
<<<<<<< HEAD
        cityFrom: data[0].cityFrom
      };
    });
=======
        data: prevState.data.concat(data),
        loading: false,
      };
    });
    console.log(data);
>>>>>>> a71b611646fab83409eb1480e170304837002fd9
  }

  render() {
    console.log(this.state.data);

    // Fligth is a Spinner while loading and then it renders as flights
    let flight = null;
    if(this.state.loading) {
      flight = <Spinner />
    } else {
      flight = this.state.data.map(flight => {
        return <Flight key={flight.id} {...flight} />
      })
    }

    return (
      <div className={classes.FlightSection}>
        {flight}
      </div>
    );
  }
}

export default FlightSection;
