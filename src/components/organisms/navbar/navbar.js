import React from 'react'

import { Link } from '../../atoms'
import './navbar.module.scss'

export function Navbar() {
  return (
    <nav>
      <Link to="/" name="Home" />
      <Link to="/categories" name="Categories" />
      <Link to="/tags" name="Tags" />
    </nav>
  )
}
