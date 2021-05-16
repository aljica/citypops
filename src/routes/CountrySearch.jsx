import { Typography, Grid, Button, Input, Container } from '@material-ui/core';
import { useState } from 'react';
import magnifyingGlass from '../static/images/magnifying-glass.png';
import UserInput from '../components/UserInput';

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
          <Button disabled={inputValue === ''} onClick={() => redirect('/country/results')}>
            <img src={magnifyingGlass} alt="Search" width="50" height="50"></img>
          </Button>
        </Grid>
      </Container>
    </div>
  );
}

export default CountrySearch;
