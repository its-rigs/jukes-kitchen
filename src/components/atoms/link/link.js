import React from "react";
import { Link as GatsbyLink } from 'gatsby';

import './link.module.scss';

export const Link = (props) => {
  return (
    <GatsbyLink to={props.to}>{props.name}</GatsbyLink>
  );
}