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
    }
}

export default geonames;
