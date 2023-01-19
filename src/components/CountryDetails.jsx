import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const { countries } = props;
  const { alpha3Code } = useParams();

  const country = countries.find(country => {
    return alpha3Code === country.alpha3Code;
  });

  return (
    <div>
      <h1>Country details</h1>
      <>
        <h2>{country.name.official}</h2>
      </>
    </div>
  );
}

export default CountryDetails;
