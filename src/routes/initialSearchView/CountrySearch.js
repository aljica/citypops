import { Typography } from '@material-ui/core';
import { Grid, Button, Input, Container } from '@material-ui/core';
import { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountrySearchResults from '../CountrySearchResults';

class CountrySearch extends Component {
  constructor(props) {
    super(props);
  }

  redirect(path) {
    this.props.history.push(path);
  }

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
            <Input fullWidth placeholder="Enter a country" inputProps={{style: { textAlign: 'center' }}}></Input>
          </Grid>
          <Grid container justify="center">
            <Button onClick={() => this.redirect('/country/results')}>
                Search
              </Button>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CountrySearch;
