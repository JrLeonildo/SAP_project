import React from "react";
import styles from "./LoginBtn.module.css";

const LoginBtn = ({ label }) => {
  return <button className={styles.loginBtn}>{label}</button>;
};

export default LoginBtn;
