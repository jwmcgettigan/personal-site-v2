/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Link = ({newtab, children, ...props}) => (
  <a target={newtab ? "_blank" : ""} rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

export default Link;