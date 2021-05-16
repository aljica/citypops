import { Grid, Button, Container } from '@material-ui/core';

const InitialSearchScreen = (props) => {

  function redirect(path) {
    props.history.push(path);
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={1} justify="center">
          <Grid item xs={6} align="center">
            <Button onClick={() => redirect('/city')} size="large" variant="contained">SEARCH BY CITY</Button>
          </Grid>
          <Grid item xs={6} align="center">
            <Button onClick={() => redirect('/country')} size="large" variant="contained">SEARCH BY COUNTRY</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default InitialSearchScreen;
