import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <button className={styles.LoadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
