import './App.css';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";
import InitialSearchScreen from './routes/InitialSearchScreen';
import CountrySearch from './routes/CountrySearch';
import CountrySearchResults from './routes/CountrySearchResults';
import CitySearchResult from './routes/CitySearchResult';
import CitySearch from './routes/CitySearch';

function App(props) {
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
      <Route path="/city" exact component={CitySearch} />
      <Route path="/city/results" exact component={CitySearchResult} />
    </Router>
  );
}

export default App;
