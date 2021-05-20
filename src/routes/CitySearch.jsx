import { Typography, Grid, Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import UserInput from '../components/UserInput';
import SearchButton from '../components/SearchButton';

const CitySearch = (props) => {
  const [soughtCity, setSoughtCity] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (props.location.notFound) setNotFound(true);
  }, [props.location.notFound]);

  function redirect(path, soughtCity) {
    props.history.push({
      pathname: path,
      cityToFind: soughtCity,
    });
  }

  function updateSoughtCity(e) {
    // User may only input letters
    const lettersRegEx = /^$|^[a-zA-zåäöÅÄÖ\s]+$/;
    if (!(lettersRegEx.test(e.target.value))) return;
    if (soughtCity.length > 50) {
      if (!(e.target.value.length < soughtCity.length)) return;
    }
    setSoughtCity(e.target.value);
  }

  function handleKeyboardClick(e) {
    if (e.key === 'Enter') {
      if (soughtCity.length > 0) redirect('/city/results', soughtCity);
    }
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
          <UserInput inputValue={soughtCity} handleKeyboardClick={handleKeyboardClick} updateInputValue={updateSoughtCity} placeholder='Enter a city' />
        </Grid>
        <Grid container justify="center">
          <SearchButton inputValue={soughtCity} redirect={redirect} path='/city/results' />
        </Grid>
        <Grid container justify="center">
          {notFound ? 
          <Typography variant="h6">
            Not Found
          </Typography> 
          : 
          <span></span>}
        </Grid>
      </Container>
    </div>
  );
}

export default CitySearch;
