/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react";
import { useTheme } from 'emotion-theming';
import Link, { LinkContent } from '../Link';
import Icon from '../Icon';

import { links } from '../../data';

const SocialLinks = () => {
  const theme = useTheme();
  const linkStyle = css(`
    grid-row: 1;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    transition: all 0.1s ease-in-out;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      color: ${theme.palette.secondary.dark};
    }
  `)
  
  return (
    <div css={css`
      display: grid;
      justify-content: center;
      align-content: center;
      gap: 1rem;
    `}>
      {links.profiles.map((p, i) => (
        <Link css={linkStyle} url={p.url} key={i}>
          <LinkContent icon={p.icon} title={p.network}/>
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks