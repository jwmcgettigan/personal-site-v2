/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as Icons from 'react-icons/fa';

const Icon = ({ icon, className }) => {
  if (icon === '') {
    return '';
  } else {
    const Icon = Icons[icon];
    return <Icon className={className}/>;
  }
}

const TransitionIcon = ({ defaultIcon, transitionIcon, className }) => {
  const transitionStyle = css(`
    .collapsed, .expanded {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      display: block;
    }

    .collapsed {
      transition: opacity .3s, transform .3s;
    }
    .expanded {
      transition: opacity .3s, transform .3s;
      transform: rotate(-180deg) scale(.5);
      opacity: 0;
    }
    &:focus {
      .collapsed {
        transform: rotate(180deg) scale(.5);
        opacity: 0;
      }
      .expanded {
        transform: rotate(0deg) scale(1);
        opacity: 1;
      }
    }
  `)

  return (
    <div css={transitionStyle} className={className} tabIndex="0">
      <Icon icon={defaultIcon} className="collapsed"/>
      <Icon icon={transitionIcon} className="expanded"/>
    </div>
  )
}

export {
  TransitionIcon
}
export default Icon;