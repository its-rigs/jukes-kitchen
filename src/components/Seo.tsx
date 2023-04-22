import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export type SeoProps = {
  title?: string
}

export const Seo: React.FC<SeoProps> = ({ title }) => {
  const data: Queries.MetadataQuery = useStaticQuery(query);

  const extendedTitle = title ? `${title} | 
  ` : ''

  return (
    <>
      <title>{extendedTitle}{data.site?.siteMetadata?.title}</title>
    </>

  );
}

export const query = graphql`
  query Metadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`
