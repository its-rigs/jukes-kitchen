import React from 'react';

import { QuantityIcon, PrepTimeIcon, CookTimeIcon } from '../../atoms';
import styles from './recipe-info.module.scss';

export const RecipeInfo = ({ servings, prepTime, cookTime }) => {
  return (
    <ul className={styles.recipeInfo}>
      <li title="Servings">
        <QuantityIcon />
        <span>{servings}</span>
      </li>
      <li title="Prep Time">
        <PrepTimeIcon />
        <span>{prepTime}</span>
      </li>
      <li title="Cook Time">
        <CookTimeIcon />
        <span>{cookTime}</span>
      </li>
    </ul>
  );
};
