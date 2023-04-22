import React from 'react';

import { Link } from 'gatsby';
import './navbar.module.scss';

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/tags">Tags</Link>
    </nav>
  );
}
