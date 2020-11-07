import React from 'react'
import { Container } from '../components/atoms'
import { Layout } from '../components/organisms'

export default () => {
  return (
    <Layout>
      <Container>
        <h1>Oops! Could't find recipe!</h1>
        <p>
          Seems we've lost a bit of information. Hopefully it'll turn up soon.
          Try checking back later.
        </p>
      </Container>
    </Layout>
  )
}
