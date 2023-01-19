import countriesData from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(countriesData);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => setCountries(response.data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route
          path="/:alpha3Code"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}
export default App;
