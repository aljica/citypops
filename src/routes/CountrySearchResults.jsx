import { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import Loading from '../components/Loading';
import CityBoxResult from '../components/CityBoxResult';
import geonames from '../api/geonames';

const CountrySearchResults = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [cityNotFound, setCityNotFound] = useState(false);

  // Create URL.
  const maxRows = 3;
  const username = 'weknowit';
  const soughtCountry = props.location.search.replace('?', '');
  const URL = 'http://api.geonames.org/searchJSON?q=' + soughtCountry + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  const [url, setURL] = useState(URL);

  function redirect(path, cityName, population) {
    props.history.push({
      pathname: path,
      name: cityName,
      population: population,
    });
  }

  async function getData(URL) {
    const cityData = await geonames.apiCall(URL);
    if (cityData.length === 0) setCityNotFound(true);
    else setResults(cityData);
    setLoading(false);
  }

  useEffect(() => {
    getData(url);
  }, [url]);

  return (
    <div>
      <Container maxwidth="sm">
        <Grid container spacing={1} justify="center">
          <Typography variant="h6">
            {soughtCountry.toUpperCase()}
          </Typography>
          <br></br>
          <br></br>
            {loading ? 
            <Grid item xs={12} align="center">
              <Loading />
            </Grid> :
            results.map((city) => {
              return(
                <Grid item xs={12} align="center">
                  <CityBoxResult redirect={redirect} path='/city/results' cityName={city.toponymName} population={city.population} />
                </Grid>
              )
            })}
            {cityNotFound ? <Grid item xs={12} align="center">
              <Typography variant="h5">
                Not Found
              </Typography>
            </Grid>
            : 
            console.log('Searching...')}
        </Grid>
      </Container>
    </div>
  );
}

export default CountrySearchResults;
