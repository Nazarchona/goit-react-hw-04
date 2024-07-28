import React from 'react';
import styles from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

function Loader() {
  return (
    <div className={styles.Loader}>
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;



