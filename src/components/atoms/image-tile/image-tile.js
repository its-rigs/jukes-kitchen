import React from 'react';

import styles from './image-tile.module.scss';

export const ImageTile = props => {
  return (
    <img
      className={styles.imageTile}
      src={props.src}
      title={props.title}
      alt={props.alt}
    />
  );
};
