import React from "react";
import styles from "./ButtonModal.module.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ButtonModal = ({ formModal, setFormModal }) => {
  return (
    <button className={styles.button} onClick={() => setFormModal(!formModal)}>
      {formModal ? (
        <CloseRoundedIcon sx={{ fontSize: 30, color: "black" }} />
      ) : (
        <AddRoundedIcon sx={{ fontSize: 30, color: "black" }} />
      )}
    </button>
  );
};

export default ButtonModal;
