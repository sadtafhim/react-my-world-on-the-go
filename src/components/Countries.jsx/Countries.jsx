import React, { use, useState } from "react";
import Country from "../Country/country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesdata = use(countriesPromise);
  const countries = countriesdata.countries;
  const [visitedCountry, setvisitedCountry] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("cunt", country);
    const newVisitedCountries = [...visitedCountry, country];
    setvisitedCountry(newVisitedCountries);
  };
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountry.length}</h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div id="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
