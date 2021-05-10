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
          <Grid container justify="center">
            <Input></Input>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CountrySearch;
