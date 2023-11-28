import * as React from "react"
import { HeadFC, Link, PageProps, graphql } from "gatsby"
import { Layout, Seo } from "../components"

const IndexPage: React.FC<PageProps<Queries.LatestRecipesQuery>> = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/recipes/${item.frontmatter.slug}`}>

            {item.frontmatter?.title}
            </Link>
          </li>
        )
      })}
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home" />

export const latestRecipesQuery = graphql`
query LatestRecipes {
  allMdx(sort: { frontmatter: { date: DESC } }) {
    nodes {
      frontmatter {
        slug
        title
      }
      id
    }
  }
}
`
