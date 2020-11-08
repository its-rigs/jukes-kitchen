import React from 'react';
import { OneThirdColumn, Row } from '../../atoms';
import { RecipeTile } from '../../molecules';

export const RecipeDisplay = ({ recipes }) => {
  let rows = [];
  for (let i = 0; i < recipes.length; i += 3)
    rows.push(recipes.slice(i, i + 3));

  return (
    <React.Fragment>
      {rows.map(row => {
        return (
          <Row>
            {row.map(({ node: post }) => {
              const { frontmatter } = post;
              return (
                <OneThirdColumn>
                  <RecipeTile
                    key={post.id}
                    slug={frontmatter.slug}
                    imageUrl={frontmatter.image.publicURL}
                    title={frontmatter.title}
                  />
                </OneThirdColumn>
              );
            })}
          </Row>
        );
      })}
    </React.Fragment>
  );
};
