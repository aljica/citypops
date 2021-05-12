import './App.css';
import InitialSearchScreen from './routes/initialSearchView/InitialSearchScreen';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountrySearch from './routes/initialSearchView/CountrySearch';
import CountrySearchResults from './routes/CountrySearchResults';
import CitySearchResult from './routes/CitySearchResult';
import CitySearch from './routes/CitySearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Typography variant="h1">
          CityPop
        </Typography>
      </div>
      <br></br>
      <Route path="/" exact component={InitialSearchScreen} />
      <Route path="/country" exact component={CountrySearch} />
      <Route path="/country/results" exact component={CountrySearchResults} />
      <Route path ="/city" exact Component={CitySearch} />
      <Route path="/city/results" exact component={CitySearchResult} />
    </Router>
  );
}

export default App;
