import { useState, useEffect } from 'react';

const CountrySearchResults = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);

  // Create URL.
  const maxRows = 3;
  const username = 'weknowit';
  const soughtCountry = props.location.search.replace('?', '');
  // City (featureClass P) Search below:
  // const URL = 'http://api.geonames.org/searchJSON?name=' + props.location.search.replace('?', '') + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  const URL = 'http://api.geonames.org/searchJSON?q=' + soughtCountry + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  const [url, setURL] = useState(URL);

  function parseData(data) {
    const cityData = data.geonames.map((city) => {
      const objectData = {};
      objectData['toponymName'] = city.toponymName;
      objectData['population'] = city.population;
      return objectData;
    });
    setResults(cityData);
    console.log(cityData);
    setLoading(false);
  }

  function getCities(URL) {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => parseData(data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getCities(url);
  }, [url]);

  return (
    <div>
      {loading ? 'Loading' : 
        <div>{results[0].toponymName + ' and ' + results[0].population}</div>
      }
    </div>
  );
}

export default CountrySearchResults;
