import React from "react";

import styles from './grid.module.scss';

export const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export const Row = ({ children }) => {
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

export const OneThirdColumn = ({ children }) => {
  return (
    <div className={[styles.oneThird, styles.column].join(' ')}>
      {children}
    </div>
  );
}

export const TwoThirdsColumn = ({ children }) => {
  return (
    <div className={[styles.twoThirds, styles.column].join(' ')}>
      {children}
    </div>
  );
}