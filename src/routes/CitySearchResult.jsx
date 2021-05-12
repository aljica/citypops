import { useState, useEffect } from 'react';
import { Grid, Container, Typography, Box } from '@material-ui/core';

const CitySearchResult = (props) => {
  const [name, setName] = useState(null);
  const [population, setPopulation] = useState('Not Found');
  const [loading, setLoading] = useState(true);

  function parseData(data) {
    const cityData = data.geonames.map((city) => {
      const objectData = {};
      objectData['toponymName'] = city.toponymName;
      objectData['population'] = city.population;
      return objectData;
    });
    if (cityData.length !== 0) {
      setName(cityData[0].toponymName);
      setPopulation(cityData[0].population);
    }
    setLoading(false);
  }

  function getCityPopulation(URL) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => parseData(data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    if (props.location.name !== undefined) {
      // If user sends in props, we can display the data straight away.
      // Otherwise, we have to fetch the data from our API.
      setName(props.location.name.toUpperCase());
      setPopulation(props.location.population);
      setLoading(false);
    } else {
      const { cityToFind } = props.location;
      const maxRows = 3;
      const username = 'weknowit';
      const URL = 'http://api.geonames.org/searchJSON?name=' + cityToFind + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
      getCityPopulation(URL);
    }
  });

  return (
    <div>
      <Container maxwidth="sm">
        <Grid container spacing={1} justify="center">
          <Typography variant="h5">
            {name}
          </Typography>
          <br></br>
          <br></br>
          <Grid item xs={12} align="center">
            <Box border={1} width="25%" borderRadius="borderRadius">
              <Typography variant="h6">
                POPULATION
              </Typography>
              <br></br>
              <br></br>
              {loading ? 'Loading...' :
              <Typography variant="h4">
                {population}
              </Typography>
              }
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CitySearchResult;
