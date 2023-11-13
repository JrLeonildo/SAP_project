import React from 'react';
import styles from './Input.module.css';

const Input = ({id, label, type, setValue, ...props}) => {
  
  return (
    <div className={styles.input}>
      <label>
        {label}
        <input
          type={type}
          id={id}
          name={id}
          onChange={({target}) => setValue(target.value)}
          {...props}
        />
      </label>
    </div>
  );
};

export default Input;