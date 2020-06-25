/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { mq, zDepth } from '../../../4_Utilities';
import React from 'react';

const Interests = ({ interests, className }) => {
  const theme = useTheme();
  const interestsStyle = css(`
    font-size: 14.6667px;
    font-weight: bold;
  `)

  return (
    <div css={interestsStyle} className={className}>
      <h1 className="title">INTERESTS</h1>
      <p>{interests.map((interest, index) => <span key={index}>{(index ? ', ' : '')}<span className="interest">{interest}</span></span>)}</p>
    </div>
  )
}
  
export default Interests;