import { useState, useEffect, useCallback } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import Loading from '../components/Loading';
import CityBoxResult from '../components/CityBoxResult';
import geonames from '../api/geonames';

const CountrySearchResults = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [cityNotFound, setCityNotFound] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [soughtCountry, setSoughtCountry] = useState(props.location.search.replace('?', '').replaceAll('%20', ' '));

  function redirect(path, cityName, population, notFound) {
    props.history.push({
      pathname: path,
      name: cityName,
      population: population,
      notFound: notFound,
    });
  }

  const fetchData = useCallback(async () => {
    const lettersRegEx = /^$|^[a-zA-ZäöÅÄÖ\s]+$/;
    if (soughtCountry === '' || lettersRegEx.test(soughtCountry) === false) {
      setCityNotFound(true);
      setLoading(false);
      return;
    }
    const cityData = await geonames.conductSearchByCountry(soughtCountry);
    if (cityData.length === 0) setCityNotFound(true);
    else setResults(cityData);
    setLoading(false);
  }, [soughtCountry]);

  useEffect(() => {
    if (cityNotFound) {
      redirect('/country', '', '', true);
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Container maxwidth="sm">
        <Grid container spacing={1} justify="center">
          <Typography variant="h6">
            {soughtCountry.toUpperCase()}
          </Typography>
          <br></br>
          <br></br>
            {loading ? 
            <Grid item xs={12} align="center">
              <Loading />
            </Grid> :
            results.map((city) => {
              return(
                <Grid key={city.toponymName} item xs={12} align="center">
                  <CityBoxResult redirect={redirect} path='/city/results' cityName={city.toponymName} population={city.population} />
                </Grid>
              )
            })}
            {cityNotFound ? <Grid item xs={12} align="center">
              <Typography variant="h5">
                Not Found
              </Typography>
            </Grid>
            : 
            <span></span>}
        </Grid>
      </Container>
    </div>
  );
}

export default CountrySearchResults;
