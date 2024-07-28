import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <div className={styles.card} onClick={() => onClick(image)}>
    <img className={styles.image} src={image.urls.small} alt={image.alt_description} />
  </div>
);

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
