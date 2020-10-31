import React from 'react'

import {
  RecipeIngredients,
  RecipeMethod,
  RecipeSection,
} from '../molecules'
import { Layout, RecipeOverview } from '../organisms'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby';

const shortcodes = { RecipeIngredients, RecipeMethod }

export default function RecipeTemplate({ data: { mdx } }) {
  const { frontmatter: overview } = mdx;
  return (
    <Layout>
      <RecipeOverview
        title={overview.title}
        servings={overview.servings}
        prepTime={overview.prepTime}
        cookTime={overview.cookTime}
        image={overview.image}
      />

      <RecipeSection sectionId="recipe">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </RecipeSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query RecipeQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        cookTime
        prepTime
        servings
        image
      }
    }
  }
`