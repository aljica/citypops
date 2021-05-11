import { Component } from 'react';

class CountrySearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      url: null,
      data: null,
    };

    // Create URL.
    const maxRows = 3;
    const username = 'weknowit';
    const URL = 'http://api.geonames.org/searchJSON?q=' + this.props.location.search.replace('?', '') + `&maxRows=${maxRows}&orderby=population&username=${username}`;
    this.url = URL;
  }

  parseData(data) {
    console.log(data);
    this.setState({ loading: false });
  }

  getCities(URL) {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.parseData(data))
      .catch((e) => console.log(e));
  }

  componentDidMount() {
    this.getCities(this.url);
  }

  render() {
    return (
      <div>
        {this.state.loading ? 'Loading' : 'Done'}
      </div>
    );
  }
}

export default CountrySearchResults;
