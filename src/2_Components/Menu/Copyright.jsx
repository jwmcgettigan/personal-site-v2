/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { Icon } from '../../2_Components';

const Copyright = ({ className }) => {

  const copyrightStyle = css(`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    align-self: end;
    white-space: nowrap;
    height: max-content;
    svg {
      margin-right: 0.5rem;
    }
  `)

  return (
    <p css={copyrightStyle} className={className}>
      <Icon icon={'FaRegCopyright'}/>
      {(new Date().getFullYear())} Justin McGettigan
    </p>
  )
}

export default Copyright;