import React from 'react'

import { Container, Row } from '../../atoms'

export const RecipeSection = ({ sectionId, children }) => {
  return (
    <section id={sectionId}>
      <Container>
        <Row>{children}</Row>
      </Container>
    </section>
  )
}
