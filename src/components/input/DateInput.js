import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

const DateInput = (value, setValue, id, ...props) => {
  return (
    <div style={{ margin: "5px auto" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateField"]}>
          <DateField
            label="Data"
            size="small"
            format="DD-MM-YYYY"
            value={value}
            onChange={({ newValue }) => setValue({ newValue })}
            {...props}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default DateInput;
