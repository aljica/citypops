import { useState, useEffect } from 'react';
import { Grid, Button, Container, Typography } from '@material-ui/core';
import Loading from '../components/Loading';

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

  function parseData(data) {
    const cityData = data.geonames.map((city) => {
      const objectData = {};
      objectData['toponymName'] = city.toponymName;
      objectData['population'] = city.population;
      return objectData;
    });
    if (cityData.length === 0) {
      setCityNotFound(true);
    } else {
      setResults(cityData);
    }
    setLoading(false);
  }

  function getCities(URL) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => parseData(data))
      .catch((e) => console.log(e));
  }

  function redirect(path, cityName, population) {
    props.history.push({
      pathname: path,
      name: cityName,
      population: population,
    });
  }

  useEffect(() => {
    getCities(url);
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
                <Button style={{width: '300px', height: '30px'}} onClick={() => redirect('/city/results', city.toponymName, city.population)} size="large" variant="contained">{city.toponymName}</Button>
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
