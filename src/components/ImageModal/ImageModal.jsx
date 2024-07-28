import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root');

function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      {image && (
        <>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>{image.description}</p>
          <p>Author: {image.user.name}</p>
        </>
      )}
    </ReactModal>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default ImageModal;
