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
    // User may only input letters
    const lettersRegEx = /^$|^[a-zA-Z\s]+$/;
    if (!(lettersRegEx.test(e.target.value))) return;
    if (inputValue.length >= 20) {
      if (!(e.target.value.length < inputValue.length)) return;
    }
    setInputValue(e.target.value);
    console.log(e.target.value);
  }

  function handleKeyboardClick(e) {
    if (e.key === 'Enter') {
      if (inputValue.length > 0) redirect('/country/results', inputValue);
    }
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
          <UserInput inputValue={inputValue} handleKeyboardClick={handleKeyboardClick} updateInputValue={updateInputValue} placeholder='Enter a country' />
        </Grid>
        <Grid container justify="center">
          <SearchButton inputValue={inputValue} redirect={redirect} path='/country/results' />
        </Grid>
      </Container>
    </div>
  );
}

export default CountrySearch;
