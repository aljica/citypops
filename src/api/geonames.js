const geonames = {
  parseData(data) {
    const cityData = data.geonames.map((city) => {
      const objectData = {};
      objectData['toponymName'] = city.toponymName;
      objectData['population'] = city.population;
      return objectData;
    });
    return cityData;
  },

  apiCall(URL) {
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => this.parseData(data))
      .catch((e) => console.log(e));
  },

  createCountrySearchURL(maxRows, soughtCountry, username) {
    return 'http://api.geonames.org/searchJSON?q=' + soughtCountry + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  },

  createCitySearchURL(maxRows, cityToFind, username) {
    return 'http://api.geonames.org/searchJSON?name=' + cityToFind + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  },
}

export default geonames;
