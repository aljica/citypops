import './App.css';
import InitialSearchScreen from './routes/initialSearchView/InitialSearchScreen';
import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountrySearch from './routes/initialSearchView/CountrySearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Typography variant="h1">
          CityPop
        </Typography>
      </div>
      <Route path="/" exact component={InitialSearchScreen} />
      <Route path="/country" exact component={CountrySearch} />
    </Router>
  );
}

export default App;
