import React from "react";
import Button from "@mui/material/Button";
import OutputIcon from "@mui/icons-material/Output";
import styles from "./OutputBtn.module.css";

const OutputBtn = ({ onClick }) => {
  return (
    <Button className={styles.btn} onClick={onClick}>
      <OutputIcon className={styles.btnIcon} />
    </Button>
  );
};

export default OutputBtn;
