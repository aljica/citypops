import { Component } from 'react';

class CountrySearchResults extends Component {
  constructor(props) {
    super(props);
    const maxRows = 3;
    const username = 'weknowit';
    const URL = 'http://api.geonames.org/searchJSON?q=' + this.props.location.search.replace('?', '') + `&maxRows=${maxRows}&orderby=population&username=${username}`;
    this.state = {
      loading: true,
      url: null,
    };
    this.url = URL;
  }

  parseData(data) {
    console.log(data);
  }

  getCities(URL) {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.parseData(data))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        Hello World
        {this.getCities(this.url)}
      </div>
    );
  }
}

export default CountrySearchResults;
