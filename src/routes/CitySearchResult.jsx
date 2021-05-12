import { useState, useEffect } from 'react';
import { Grid, Button, Container, Typography, Box } from '@material-ui/core';

const CitySearchResult = (props) => {
  const [name, setName] = useState(null);
  const [population, setPopulation] = useState(null);

  useEffect(() => {
    if (props.location.name !== undefined) setName(props.location.name.toUpperCase());
    setPopulation(props.location.population);
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
              <Typography variant="h8">
                POPULATION
              </Typography>
              <br></br>
              <br></br>
              <Typography variant="h4">
                {population}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CitySearchResult;
