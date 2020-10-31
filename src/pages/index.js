import React from "react"
import { graphql } from "gatsby"
import { Link } from '../components/atoms'
import { Layout } from '../components/organisms'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug} name={post.frontmatter.title} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
