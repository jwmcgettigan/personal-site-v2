/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react';
import Icon from './Icon';
import { NavLink } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';
import { bp, mq, zDepth } from '../helper';

//! Rather than passing in all of this info, why not pass in functions to differentiate link types?
// So that the focus is onClick instead of <a></a>


const Link = ({url, onclick, className, newtab, children}) => (
  <a href={url} onClick={onclick} className={className} target={newtab ? "_blank" : ""} rel="noopener noreferrer">
    {children}
  </a>
)

const PageLink = ({page, className}) => {
  const theme = useTheme();
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
    <Icon icon={page.icon}/>
    {page.name}
  </NavLink>)
}

const Button = ({url, onclick, className, type, page, newtab, children}) => {
  //! Figure out when it's best to use <button> vs <a>
  const theme = useTheme();
  const buttonStyle = css(`
    background: ${theme.palette.primary.dark};
    color: ${theme.palette.getContrastText(theme.palette.primary.dark)};
    font-weight: bold;
    padding: 0.375rem 1rem 0.375rem 1rem;
    transition: all 0.1s ease-in-out;
    font-size: 1rem;
    border-radius: 0.25rem;
    line-height: 1.5;

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

const Content = ({icon, text, title}) => (<>
  <span className="icon">
    <Icon icon={icon}/>
  </span>
  <span className="text">{text}</span></>
)

export {
  Button,
  PageLink,
  Content
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