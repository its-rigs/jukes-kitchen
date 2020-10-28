import React, { Fragment } from "react";

import { Navbar } from '../navbar/navbar'

import 'normalize.css'
import './skeleton.scss';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="content">
        {children}
      </div>
    </Fragment>
  );
}