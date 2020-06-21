/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { mq, zDepth, lighten } from '../../../utils';

import React from 'react';
import FlPolyLogo from '../../../assets/FloridaPoly.svg';

const Education = ({ education, className }) => {
  const theme = useTheme();
  const educationStyle = css(`
    img {
      height: 1rem;
    }
    p {
      font-size: 16px;
      font-weight: bold;
      span {
        font-size: 14.6667px;
        font-weight: normal;
        white-space: nowrap;
      }
    }
  `)

  const schoolComponent = (school) => (
    <a href={school.url}>
      <img src={FlPolyLogo} alt="Florida Poly Logo"/> {school.institution + ' (Florida Poly)'}<br/>
    </a>
  )

  return (
    <div css={educationStyle} className={className}>
      <h1 className="title">EDUCATION</h1>
      {education.map((school, index) => (
        <p key={index}>
          {schoolComponent(school)}
          <span>
            {school.area + ' | GPA: ' + school.gpa}<br/>
            {school.startDate + ' - ' + school.endDate}
          </span>
        </p>
      ))}
    </div>
  )
}

export default Education;