import { Input } from '@material-ui/core';

const UserInput = (props) => {
  return (
    <Input value={props.inputValue} onKeyDown={(e) => props.handleKeyboardClick(e)} onChange={(e) => props.updateInputValue(e)} fullWidth placeholder={props.placeholder} inputProps={{style: { textAlign: "center" }}} />
  );
}

export default UserInput; 
