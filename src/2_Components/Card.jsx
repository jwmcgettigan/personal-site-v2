/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react';
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth, color } from '../4_Utilities';

const Card = ({ className, children }) => {
  const cardStyle = css(`
    border: 0;

    padding: 1rem;
    ${mq('tablet-wide')} {
      padding: 3rem;
    }

    ${mq('phablet')} {
      //max-width: 640px;
    }
    ${mq('tablet')} {
      max-width: 720px;
    }
    ${mq('tablet-wide')} {
      max-width: 960px;
    }
    ${mq('desktop')} {
      max-width: 1140px;
    }
  `)
  return (
    <div css={cardStyle} className={className}>
      {children}
    </div>
  )
}

export default Card;