import React from 'react';
import { Grid, Button, Container } from '@material-ui/core';

class InitialSearchScreen extends React.Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Grid container spacing={1} justify="center">
            <Grid item xs={6} align="center">
              <Button size="large" variant="contained">SEARCH BY CITY</Button>
            </Grid>
            <Grid item xs={6} align="center">
              <Button size="large" variant="contained">SEARCH BY COUNTRY</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default InitialSearchScreen;
