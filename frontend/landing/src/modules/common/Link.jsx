/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Link = ({ newtab=false, children, ...rest }) => (
  <a target={newtab ? "_blank" : ""} rel="noopener noreferrer" {...rest}>
    {children}
  </a>
)

export default Link;