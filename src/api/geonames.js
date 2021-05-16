const geonames = () => {
  function parseData(data) {
    const cityData = data.geonames.map((city) => {
      const objectData = {};
      objectData['toponymName'] = city.toponymName;
      objectData['population'] = city.population;
      return objectData;
    });
    return cityData;
  }

function apiCall(URL) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => parseData(data))
    .catch((e) => console.log(e));
  }
}

export default geonames;
