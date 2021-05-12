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
          <Grid item xs={12} align="center">
            <Box>{population}</Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CitySearchResult;
