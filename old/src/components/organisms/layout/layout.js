import React, { Fragment } from 'react';

import { Head } from '../../atoms';
import { Navbar } from '../navbar/navbar';

import 'normalize.css';
import './layout.scss';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head />
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
};
