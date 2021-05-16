import { Button } from '@material-ui/core';

const CityBoxResult = (props) => {
  return (
    <Button style={{width: '300px', height: '30px'}} onClick={() => props.redirect(props.path, props.cityName, props.population)} size="large" variant="contained">{props.cityName}</Button>
  )
}

export default CityBoxResult;
