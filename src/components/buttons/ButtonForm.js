import React from 'react';
import styles from './buttonForm.module.css';

const ButtonForm = ({text}) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  );
};

export default ButtonForm;
