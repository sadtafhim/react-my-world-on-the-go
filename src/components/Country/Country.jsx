import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [Visited, stateVisited] = useState(false);
  const handleVisitied = () => {
    // if (Visited) {
    //   stateVisited(false);
    // } else {
    //   stateVisited(true);
    // }

    // stateVisited(Visited ? false : true);

    stateVisited(!Visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${Visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Country Name: {country.name.common}</h3>
      <p>Country Population: {country.population.population}</p>
      <p>
        area: {country.area.area},
        {country.area.area > 300000 ? "big country" : "small country"}
      </p>
      <button onClick={handleVisitied}>
        {Visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
