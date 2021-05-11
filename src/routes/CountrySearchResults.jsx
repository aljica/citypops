import { useState, useEffect } from 'react';

const CountrySearchResults = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);

  // Create URL.
  const maxRows = 3;
  const username = 'weknowit';
  const URL = 'http://api.geonames.org/searchJSON?q=' + props.location.search.replace('?', '') + `&featureClass=P&maxRows=${maxRows}&orderby=population&username=${username}`;
  const [url, setURL] = useState(URL);

  function parseData(data) {
    console.log(data);
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
      {loading ? 'Loading' : 'Done'}
    </div>
  );
}

export default CountrySearchResults;
