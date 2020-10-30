import React from 'react'

import { TwoThirdsColumn } from '../../atoms'

export const RecipeMethod = ({ children }) => {
  return (
    <TwoThirdsColumn>
      <h2>Method</h2>
      {children}
    </TwoThirdsColumn>
  )
}
