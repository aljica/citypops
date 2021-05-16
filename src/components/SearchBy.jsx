import { Button } from '@material-ui/core';

const SearchBy = (props) => {
  return (
    <Button onClick={() => props.redirect(props.path)} size="large" variant="contained">{props.buttonText}</Button>
  );
}

export default SearchBy;
