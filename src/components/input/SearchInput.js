import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const style = {
  bgcolor: "#e9e9e9",
  minWidth: "270px",
};

const SearchInput = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        sx={style}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
