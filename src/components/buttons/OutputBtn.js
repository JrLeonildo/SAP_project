import React from "react";
import Button from "@mui/material/Button";
import OutputIcon from "@mui/icons-material/Output";

const OutputBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <OutputIcon sx={{ fontSize: 30, color: "black" }} />
    </Button>
  );
};

export default OutputBtn;
