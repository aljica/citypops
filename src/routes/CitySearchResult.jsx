import { useState, useEffect } from 'react';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import Loading from '../components/Loading';
import geonames from '../api/geonames';

const CitySearchResult = (props) => {
  const [name, setName] = useState(null);
  const [population, setPopulation] = useState('Not Found');
  const [loading, setLoading] = useState(true);

  async function getData(URL) {
    const cityData = await geonames.apiCalls(URL);
    if (cityData.length !== 0) {
      setName(cityData[0].toponymName);
      setPopulation(cityData[0].population);
    }
    setLoading(false);
  }

  function redirect(path) {
    props.history.push({
      pathname: path,
      notFound: true,
    });
  }

  useEffect(() => {
    if (!loading) {
      if (population === 'Not Found') redirect('/city');
    }
  });

  useEffect(() => {
    if (props.location.name !== undefined) {
      // If user sends in props, we can display the data straight away.
      // Otherwise, we have to fetch the data from our API.
      setName(props.location.name.toUpperCase());
      setPopulation(props.location.population);
      setLoading(false);
    } else {
      const { cityToFind } = props.location;
      const URL = geonames.createCitySearchURL(3, cityToFind, 'weknowit');
      getData(URL);
    }
  }, [name, population, props.location]);

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
              {loading ? 
              <Loading /> :
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
