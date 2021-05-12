import { Typography, Grid, Input, Button, Container } from '@material-ui/core';
import { useState, useEffect } from 'react';

const CitySearch = (props) => {
  const [soughtCity, setSoughtCity] = useState('');

  function redirect(path, soughtCity) {
    props.history.push({
      pathname: path,
      cityToFind: soughtCity,
    });
  }

  function updateSoughtCity(e) {
    setSoughtCity(e.target.value);
  }

  return (
    <div>
      <Container maxWidth="sm">
          <Grid container justify="center">
            <Typography variant="h6">
              SEARCH BY CITY
            </Typography>
          </Grid>
          <br></br>
          <Grid container justify="center">
            <Input value={soughtCity} onChange={(e) => updateSoughtCity(e)} fullWidth placeholder="Enter a city" inputProps={{style: { textAlign: "center" }}} />
          </Grid>
          <Grid container justify="center">
            <Button onClick={() => redirect('/city/results', soughtCity)}>
                Search
              </Button>
          </Grid>
        </Container>
    </div>
  );
}

export default CitySearch;
