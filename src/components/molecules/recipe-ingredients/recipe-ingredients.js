import React from 'react';

import { OneThirdColumn } from '../../atoms';

export const RecipeIngredients = ({ children }) => {
  return (
    <OneThirdColumn>
      <h2>Ingredients</h2>
      {children}
    </OneThirdColumn>
  );
};
