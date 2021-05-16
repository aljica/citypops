import { Typography, Grid, Container } from '@material-ui/core';
import { useState } from 'react';
import UserInput from '../components/UserInput';
import SearchButton from '../components/SearchButton';

const CountrySearch = (props) => {
  const [inputValue, setInputValue] = useState('');

  function redirect(path) {
    props.history.push({
      pathname: path,
      search: inputValue,
    });
  }

  function updateInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Grid container justify="center">
          <Typography variant="h6">
            SEARCH BY COUNTRY
          </Typography>
        </Grid>
        <br></br>
        <Grid container justify="center">
          <UserInput inputValue={inputValue} updateInputValue={updateInputValue} placeholder={"Enter a country"} />
        </Grid>
        <Grid container justify="center">
          <SearchButton inputValue={inputValue} redirect={redirect} path='/country/results' />
        </Grid>
      </Container>
    </div>
  );
}

export default CountrySearch;
