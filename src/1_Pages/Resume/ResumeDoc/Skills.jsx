/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { mq, zDepth } from '../../../4_Utilities';
import React from 'react';

const Skills = ({ skills, className }) => {
  const theme = useTheme();
  const skillsStyle = css(`
    p {
      font-size: 18.6667px;
      font-weight: bold;
      span {
        font-size: 14.6667px;
      }
    }
  `)

  return (
    <div css={skillsStyle} className={className}>
      <h1 className="title">SKILLS</h1>
      {skills.map((category, index) => (
        <p key={index}>{category.name + ': '}<span>{category.keywords.map((skill, index) => (index ? ', ' : '') + skill)}</span></p>
      ))}
    </div>
  )
}

export default Skills;