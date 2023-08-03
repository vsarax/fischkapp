import React from 'react';

import styles from "./Counter.module.css";

const Counter = (props) => {

  return (
    <div className={styles.text}>
      <p>{props.text}</p>
      <p className={styles.count}>{props.count}</p>
    </div>
  );
    
};
  
export default Counter;
    