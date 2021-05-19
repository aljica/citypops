import { Typography, Grid, Input, Button, Container } from '@material-ui/core';
import { useState } from 'react';
import UserInput from '../components/UserInput';
import SearchButton from '../components/SearchButton';

const CitySearch = (props) => {
  const [soughtCity, setSoughtCity] = useState('');

  function redirect(path, soughtCity) {
    props.history.push({
      pathname: path,
      cityToFind: soughtCity,
    });
  }

  function updateSoughtCity(e) {
    if (soughtCity.length >= 20) {
      if (!(e.target.value.length < soughtCity.length)) return;
    }
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
            <UserInput inputValue={soughtCity} updateInputValue={updateSoughtCity} placeholder='Enter a city' />
          </Grid>
          <Grid container justify="center">
            <SearchButton inputValue={soughtCity} redirect={redirect} path='/city/results' />
          </Grid>
        </Container>
    </div>
  );
}

export default CitySearch;
