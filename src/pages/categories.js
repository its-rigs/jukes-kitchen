import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/atoms'
import { Layout } from '../components/organisms'
import { Link } from 'gatsby'

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Categories = ({ data }) => {
  const { edges: recipes } = data.allMdx
  const categoriesSet = new Set();
  const recipeMap = new Map();

  recipes.forEach(({ node: recipeData }) => {
    const { id, frontmatter } = recipeData;
    const { slug, categories, title } = frontmatter;
    const recipe = { id, slug, title };

    categories.forEach(category => {
      const capitalisedCategory = capitaliseFirstLetter(category)
      categoriesSet.add(capitalisedCategory);

      let recipesForCategory = recipeMap.get(capitalisedCategory);

      if (recipesForCategory) {
        recipesForCategory.push(recipe)
      } else {
        recipesForCategory = [recipe]
      }

      recipeMap.set(capitalisedCategory, recipesForCategory);
    });
  });

  const orderedCategories = Array.from(categoriesSet).sort();
  console.warn(recipeMap)

  return (
    <Layout>
      <Container>
        {orderedCategories.map((category) => (
          <section>
            <h2>{category}</h2>
            <ul>
              {recipeMap.get(category)?.map(recipe => (
                <li key={recipe.id}>
                  <Link to={`../${recipe.slug}`}>{recipe.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query categoriesQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            categories
            slug
            title
          }
        }
      }
    }
  }
`

export default Categories
