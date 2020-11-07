import React from 'react'
import { graphql } from 'gatsby'
import { Container, OneThirdColumn } from '../components/atoms'
import { RecipeTile } from '../components/molecules'
import { Layout } from '../components/organisms'

const Index = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <Container>
        {posts.map(({ node: post }) => {
          const { frontmatter } = post;
          return (
            <OneThirdColumn>
              <RecipeTile key={post.id} slug={frontmatter.slug} imageUrl={frontmatter.image.publicURL} title={frontmatter.title} />
            </OneThirdColumn>
          )
        })}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default Index
