import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import { Layout, Seo } from "../../components"
import { MDXProvider } from '@mdx-js/react'
import { Recipe } from "../../components/Recipe"

const components = { Ingredients: Recipe.Ingredients, Method: Recipe.Method }

const RecipePage: React.FC<PageProps<Queries.RecipeQuery>> = ({ data, children }) => {
  return (
    <Layout>
      <Recipe
        title={data.mdx.frontmatter.title}
        servings={data.mdx.frontmatter.servings}
        cookTime={data.mdx.frontmatter.cookTime}
        prepTime={data.mdx.frontmatter.prepTime}
      >
        <MDXProvider components={components}>
          <div className="grid grid-cols-1 lg:gap-7 lg:grid-cols-3">
            {children}
          </div>
        </MDXProvider>
      </Recipe>
    </Layout>
  );
}

export default RecipePage

export const Head: HeadFC = ({ data }: { data: Queries.RecipeQuery }) => <Seo title={data.mdx.frontmatter.title} />

export const query = graphql`
  query RecipeQuery ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        cookTime
        prepTime
        servings
      }
    }
  }
`
