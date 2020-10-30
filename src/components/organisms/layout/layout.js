import React, { Fragment } from 'react'

import { Navbar } from '../navbar/navbar'

import 'normalize.css'
import './layout.scss'

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  )
}
