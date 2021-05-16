import { Input } from '@material-ui/core';

const UserInput = (props) => {
  return (
    <Input value={props.inputValue} onChange={(e) => props.updateInputValue(e)} fullWidth placeholder={props.placeholder} inputProps={{style: { textAlign: "center" }}} />
  );
}

export default UserInput; 
