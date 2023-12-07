import React from "react";
import TextField from "@mui/material/TextField";

const PasswordInput = ({ value, setValue, ...props }) => {
  return (
    <TextField
      id="outlined-password-input"
      label="Password"
      type="password"
      value={value}
      onChange={({ target }) => setValue(target.value)}
      size="small"
      margin="normal"
      {...props}
      autoComplete="current-password"
    />
  );
};

export default PasswordInput;
