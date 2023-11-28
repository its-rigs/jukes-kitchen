import React from 'react';

import styles from './image.module.scss';

export const Image = props => {
  return (
    <img
      className={styles.recipeImage}
      src={props.src}
      title={props.title}
      alt={props.alt}
    />
  );
};
