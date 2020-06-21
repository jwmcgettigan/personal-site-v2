/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { mq, zDepth, lighten, color } from '../../../4_Utilities';

import React from 'react';

const Experience = ({ experience, className }) => {
  const theme = useTheme();
  const experienceStyle = css(`
    font-size: 14.6667px;
    h1 {
      margin-top: 0;
    }
    h4 {
      display: grid;
      grid-template-columns: min-content min-content auto;
      grid-column-gap: 6px;
      font-weight: normal;
      font-size: 17.3333px;
      white-space: nowrap;
      span {
        //! color: color(surface, on, 0.465);
        color: ${color(theme.palette.resume.left).getContrastText(4)};
      }
      i {
        text-align: right;
      }
    }
    li {
      line-height: 1.4rem;
    }
  `)

  return (
    <div css={experienceStyle} className={className}>
      <h1 className="title">EXPERIENCE</h1>
      {experience.map((place, index) => (
        <div key={index}>
          <h4>
            <b>{place.position}</b><span>{place.company}</span> 
            <i>{place.startDate + ' - ' + place.endDate}</i>
          </h4>
          <ul>
            {place.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Experience;