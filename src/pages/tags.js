import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../components/atoms';
import { Layout } from '../components/organisms';
import { Link } from 'gatsby';

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Tags = ({ data }) => {
  const { edges: recipes } = data.allMdx;
  const tagsSet = new Set();
  const recipeMap = new Map();

  recipes.forEach(({ node: recipeData }) => {
    const { id, frontmatter } = recipeData;
    const { slug, tags, title } = frontmatter;
    const recipe = { id, slug, title };

    tags.forEach(tag => {
      const capitalisedTag = capitaliseFirstLetter(tag);
      tagsSet.add(capitalisedTag);

      let recipesForTag = recipeMap.get(capitalisedTag);

      if (recipesForTag) {
        recipesForTag.push(recipe);
      } else {
        recipesForTag = [recipe];
      }

      recipeMap.set(capitalisedTag, recipesForTag);
    });
  });

  const orderedTags = Array.from(tagsSet).sort();

  return (
    <Layout>
      <Container>
        {orderedTags.map(tag => (
          <section>
            <h2>{tag}</h2>
            <ul>
              {recipeMap.get(tag).map(recipe => (
                <li key={recipe.id}>
                  <Link to={`../${recipe.slug}`}>{recipe.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query tagsQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            tags
            slug
            title
          }
        }
      }
    }
  }
`;

export default Tags;
