import './App.css';
import InitialSearchScreen from './routes/initialSearchView/InitialSearchScreen';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountrySearch from './routes/initialSearchView/CountrySearch';
import CountrySearchResults from './routes/CountrySearchResults';

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
    </Router>
  );
}

export default App;
