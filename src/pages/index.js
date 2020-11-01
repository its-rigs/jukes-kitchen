import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/atoms'
import { Layout } from '../components/organisms'
import { Link } from 'gatsby'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <Container>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
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
