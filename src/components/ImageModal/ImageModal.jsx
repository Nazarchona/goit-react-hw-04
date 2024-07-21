import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    {image && (
      <div className={styles.content}>
        <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
        <p>{image.description || 'No description available'}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    )}
  </Modal>
);

export default ImageModal;
