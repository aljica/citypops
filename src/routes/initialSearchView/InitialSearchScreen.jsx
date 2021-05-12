import { Component } from 'react';
import { Grid, Button, Container } from '@material-ui/core';

class InitialSearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounted');
  }

  redirect(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Grid container spacing={1} justify="center">
            <Grid item xs={6} align="center">
              <Button onClick={() => this.redirect('/city')} size="large" variant="contained">SEARCH BY CITY</Button>
            </Grid>
            <Grid item xs={6} align="center">
              <Button onClick={() => this.redirect('/country')} size="large" variant="contained">SEARCH BY COUNTRY</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default InitialSearchScreen;
