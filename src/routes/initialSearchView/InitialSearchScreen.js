import { Component } from 'react';
import { Grid, Button, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

class InitialSearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounted');
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Grid container spacing={1} justify="center">
            <Grid item xs={6} align="center">
              <Button size="large" variant="contained">SEARCH BY CITY</Button>
            </Grid>
            <Grid item xs={6} align="center">
              <Button onClick={() => this.nextPath('/country')} size="large" variant="contained">SEARCH BY COUNTRY</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default InitialSearchScreen;
