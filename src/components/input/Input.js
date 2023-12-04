import React from "react";
import styles from "./Input.module.css";

const Input = ({ id, label, type, setValue, ...props }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        id="input"
        type={type}
        setValue={setValue}
        onChange={({ target }) => setValue(target.value)}
        size="small"
        required
        {...props}
      />
    </label>
  );
};

export default Input;
