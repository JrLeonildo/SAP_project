import React from "react";
import styles from "./ButtonModal.module.css";

const ButtonModal = ({ modal, setModal }) => {
  return (
    <button className={styles.button} onClick={() => setModal(!modal)}>
      {modal ? "x" : "+"}
    </button>
  );
};

export default ButtonModal;
