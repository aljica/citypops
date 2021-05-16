import { Button } from '@material-ui/core';
import magnifyingGlass from '../static/images/magnifying-glass.png';

const SearchButton = (props) => {
  return (
    <Button disabled={props.inputValue === ''} onClick={() => props.redirect(props.path, props.inputValue)}>
      <img src={magnifyingGlass} alt="Search" width="50" height="50"></img>
    </Button>
  );
}

export default SearchButton;
