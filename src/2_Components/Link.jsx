/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { css, jsx } from '@emotion/core'

import React from 'react';
import Icon from './Icon';
import { NavLink } from 'react-router-dom';

import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth, color } from '../4_Utilities';

//! Rather than passing in all of this info, why not pass in functions to differentiate link types?
// So that the focus is onClick instead of <a></a>


const Link = ({url, onclick, className, newtab, children}) => (
  <a href={url} onClick={onclick} className={className} target={newtab ? "_blank" : ""} rel="noopener noreferrer">
    {children}
  </a>
)

const LinkContent = ({icon, text, end}) => {
  const linkContentStyle = css(`
    display: grid;
    grid-template-columns: ${end ? 'auto 17px' : '17px auto'};
    align-items: center;

    .icon {
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 17px;

      svg {
        display: flex;
        align-items: center;
      }
    }

    .text {
      margin: auto;
      ${end ? 'margin-right: 6px;' : 'margin-left: 6px;'}
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `)

  const textStyle = css(`
    ${end ? 'margin: auto;' : ''}
    display: flex;
    align-items: center;
  `)

  const iconStyle = css(`
    display: flex;
    align-items: center;
    text-align: center;

    svg {
      display: flex;
      align-items: center;
    }
  `)

  if (end) {
    return (<>
      <span css={textStyle} className="text">{text}</span>
      <span css={iconStyle} className="icon">
        <Icon icon={icon}/>
      </span>
    </>)
  } else {
    return (<>
      <span css={iconStyle} className="icon">
        <Icon icon={icon}/>
      </span>
      <span css={textStyle} className="text">{text}</span>
    </>)
  }
}

const PageLink = ({page, className}) => {
  const navLinkStyle = css(`
    display: flex;
    align-items: center;

    svg {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
    }
  `)
  
  return (
  <NavLink to={page.path} css={navLinkStyle} className={className} exact>
    <LinkContent icon={page.icon} text={page.name}/>
  </NavLink>)
}

const Button = ({url, onclick, className, type, page, newtab, children}) => {
  //! Figure out when it's best to use <button> vs <a>
  const buttonStyle = theme => css(`
    background: ${theme.palette.primary.dark};
    color: ${color(theme.palette.primary.dark).getContrastText()};
    font-weight: bold;
    padding: 0.375rem 1rem 0.375rem 1rem;
    transition: all 0.1s ease-in-out;
    font-size: 1rem;
    border-radius: 0.25rem;
    line-height: 1.5;
    ${zDepth(2)}

    border: 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    //margin: 0 auto 0 auto;
    
    display: flex;
    align-items: center;
    
    svg {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
    }
    &:hover {
      //filter: invert(1%);
      //transform: scale(1.01, 1.01);
      //transition: all 0.1s ease-in-out;
      cursor: pointer;
      ${zDepth(8)}
      color: ${color(theme.palette.primary.dark).getContrastText()};
    }
  `)

  if (type === 'pagelink') {
    return <PageLink page={page} css={buttonStyle} className={className}/>
  } else {
    return (
      <Link url={url} onclick={onclick} css={buttonStyle} className={className} newtab={newtab}>
        {children}
      </Link>
    )
  }
}

export {
  Button,
  PageLink,
  LinkContent
}
export default Link;


/*
const Link = ({url = '', icon = '', text = '', style = '', title = '', newtab = true, onclick = () => false}) => {
  return (
  <a href={url} onClick={onclick} title={title} className={style} target={newtab ? "_blank" : ""} rel="noopener noreferrer">
    <span className="icon"><Icon icon={icon}/></span><span className="text">{text}</span>
  </a>
)}*/

/*
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'theme.palette.primary.main'
  },
}));*/