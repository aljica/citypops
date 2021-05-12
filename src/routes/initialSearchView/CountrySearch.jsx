import { Typography, Grid, Button, Input, Container } from '@material-ui/core';
import { Component } from 'react';
import magnifyingGlass from '../../static/images/magnifying-glass.png';

class CountrySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  redirect(path) {
    this.props.history.push({
      pathname: path,
      search: this.state.inputValue,
    });
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
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
            <Input value={this.state.inputValue} onChange={(e) => this.updateInputValue(e)} fullWidth placeholder="Enter a country" inputProps={{style: { textAlign: "center" }}} />
          </Grid>
          <Grid container justify="center">
            <Button onClick={() => this.redirect('/country/results')}>
                <img src={magnifyingGlass} alt="Search" width="50" height="50"></img>
              </Button>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CountrySearch;
