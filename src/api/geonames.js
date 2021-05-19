const geonames = {
  parseData(data) {
    const cityData = data.geonames.map((city) => {
      const objectData = {};
      objectData['toponymName'] = city.toponymName;
      objectData['population'] = city.population;
      objectData['id'] = Math.random();
      return objectData;
    });
    return cityData;
  },

  apiCall(URL) {
    return fetch(URL)
      .then((response) => response.json())
      .catch((e) => console.log(e));
  },

  async conductSearchByCountry(soughtCountry) {
    // First, find the soughtCountry's country code.
    let url = `http://api.geonames.org/searchJSON?name_startsWith=${soughtCountry}&featureCode=PCLI&username=weknowit`;
    let data = await this.apiCall(url);
    // If no such countries exist, return an empty array.
    if (data.totalResultsCount === 0) return []
    // Otherwise, get the countryCode.
    const { countryCode } = data.geonames[0];
    // Then, find top 3 cities for that country code.
    url = `http://api.geonames.org/searchJSON?country=${countryCode}&cities=cities15000&orderby=population&maxRows=3&username=weknowit`;
    data = await this.apiCall(url);
    return this.parseData(data);
  },

  createCountrySearchURL(maxRows, soughtCountry, username) {
    return 'http://api.geonames.org/searchJSON?q=' + soughtCountry + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  },

  createCitySearchURL(maxRows, cityToFind, username) {
    return 'http://api.geonames.org/searchJSON?name=' + cityToFind + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  },
}

export default geonames;
