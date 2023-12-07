import React from "react";
import TextField from "@mui/material/TextField";

const EmailInput = ({ value, setValue, ...props }) => {
  return (
    <TextField
      id="outlined-email-input"
      label="Email"
      type="email"
      value={value}
      setValue={setValue}
      onChange={({ target }) => setValue(target.value)}
      size="small"
      margin="normal"
      {...props}
    />
  );
};

export default EmailInput;
