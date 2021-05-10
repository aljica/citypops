import { Component } from 'react';

class CountrySearchResults extends Component {
  constructor(props) {
    super(props);
    const URL = 'api.geonames.org/search' + this.props.location.search;
    console.log(URL);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default CountrySearchResults;
