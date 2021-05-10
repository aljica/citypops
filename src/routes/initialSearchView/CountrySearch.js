import { Typography } from '@material-ui/core';
import { Grid, Button, Input, Container } from '@material-ui/core';
import { Component } from 'react';

class CountrySearch extends Component {
  render() {
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
            <Input placeholder="Enter a country" inputProps={{style: { textAlign: 'center '}}}></Input>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CountrySearch;
