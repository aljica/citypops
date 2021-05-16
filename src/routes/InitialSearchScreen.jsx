import { Grid, Container } from '@material-ui/core';
import SearchBy from '../components/SearchBy';

const InitialSearchScreen = (props) => {

  function redirect(path) {
    props.history.push(path);
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={1} justify="center">
          <Grid item xs={6} align="center">
            <SearchBy redirect={redirect} path='/city' buttonText='SEARCH BY CITY' />
          </Grid>
          <Grid item xs={6} align="center">
            <SearchBy redirect={redirect} path='/country' buttonText='SEARCH BY COUNTRY' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default InitialSearchScreen;
