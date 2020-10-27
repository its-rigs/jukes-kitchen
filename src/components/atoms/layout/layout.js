import React from "react";

import 'normalize.css'
import './skeleton.scss';

export const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}