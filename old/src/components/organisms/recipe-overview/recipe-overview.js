import React from 'react';

import { OneThirdColumn, TwoThirdsColumn, Image } from '../../atoms';
import { RecipeSection, RecipeInfo } from '../../molecules';

export const RecipeOverview = ({
  title,
  image,
  servings,
  prepTime,
  cookTime,
}) => {
  return (
    <RecipeSection sectionId="overview">
      <OneThirdColumn>
        <Image src={image} />
      </OneThirdColumn>

      <TwoThirdsColumn>
        <h1>{title}</h1>
        <RecipeInfo
          servings={servings}
          prepTime={prepTime}
          cookTime={cookTime}
        />
      </TwoThirdsColumn>
    </RecipeSection>
  );
};
