import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div>
      <h2>Countries</h2>
      {countries.map(country => {
        return (
          <div key={country.alpha3Code}>
            <h3>
              <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
