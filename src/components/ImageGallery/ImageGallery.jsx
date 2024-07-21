import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={image.id} className={styles.item}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
