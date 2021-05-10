import './App.css';
import InitialSearchScreen from './routes/initialSearchView/InitialSearchScreen';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Typography variant="h1">
        CityPop
      </Typography>
      <InitialSearchScreen></InitialSearchScreen>
    </div>
  );
}

export default App;
