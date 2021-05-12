import { useState, useEffect } from 'react';
import { Grid, Button, Container, Typography } from '@material-ui/core';

const CountrySearchResults = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);

  // Create URL.
  const maxRows = 3;
  const username = 'weknowit';
  const soughtCountry = props.location.search.replace('?', '');
  // City (featureClass P) Search below:
  // const URL = 'http://api.geonames.org/searchJSON?name=' + props.location.search.replace('?', '') + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  const URL = 'http://api.geonames.org/searchJSON?q=' + soughtCountry + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  const [url, setURL] = useState(URL);

  function parseData(data) {
    const cityData = data.geonames.map((city) => {
      const objectData = {};
      objectData['toponymName'] = city.toponymName;
      objectData['population'] = city.population;
      return objectData;
    });
    setResults(cityData);
    console.log(cityData);
    setLoading(false);
  }

  function getCities(URL) {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => parseData(data))
      .catch((e) => console.log(e));
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
              Loading
            </Grid> :
              results.map((city) => {
                return(
                  <Grid item xs={12} align="center">
                  <Button size="large" variant="contained">{city.toponymName}</Button>
                  </Grid>
                )
              })}
        </Grid>
      </Container>
    </div>
  );
}

export default CountrySearchResults;
