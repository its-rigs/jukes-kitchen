import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../components/atoms';
import { Layout, RecipeDisplay } from '../components/organisms';

const Index = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Container>
        <RecipeDisplay recipes={posts} />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query indexQuery {
    allMdx(limit: 10, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            image {
              publicURL
            }
            date
          }
        }
      }
    }
  }
`;

export default Index;
