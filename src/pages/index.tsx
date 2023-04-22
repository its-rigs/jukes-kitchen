import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import { Layout, Seo } from "../components"

const IndexPage: React.FC<PageProps<Queries.LatestRecipesQuery>> = ({ data }) => {
  return (
    <Layout>
      {data.allFile.nodes.map((item, index) => {
        return (
          <li key={index}>{item.name}</li>
        )
      })}
    </Layout>
  );
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home" />


export const latestRecipesQuery = graphql`
  query LatestRecipes {
    allFile {
      nodes {
        name
      }
    }
  }
`
