import React from 'react';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';

import './Link.scss';

//! Rather than passing in all of this info, why not pass in functions to differentiate link types?
// So that the focus is onClick instead of <a></a>

/*
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'theme.palette.primary.main'
  },
}));*/

const Link = ({url, onclick, className, newtab, children}) => (
  <a href={url} onClick={onclick} className={className} target={newtab ? "_blank" : ""} rel="noopener noreferrer">
    {children}
  </a>
)

/*
const Link = ({url = '', icon = '', text = '', style = '', title = '', newtab = true, onclick = () => false}) => {
  return (
  <a href={url} onClick={onclick} title={title} className={style} target={newtab ? "_blank" : ""} rel="noopener noreferrer">
    <span className="icon"><Icon icon={icon}/></span><span className="text">{text}</span>
  </a>
)}*/

const PageLink = ({page, style = ''}) => {
  //console.log(page);
  return (
  <NavLink to={page.path} className={style + ' nav-link'} exact>
    <Icon icon={page.icon}/>
    {page.name}
  </NavLink>)
}

const Button = ({url, onclick, className, type, page, newtab}) => {
  //! Figure out when it's best to use <button> vs <a>
  if (type === 'pagelink') {
    return <PageLink page={page} style={"button"}/>
  } else {
    return <Link url={url} onclick={onclick} className={className} newtab={newtab}/>
  }
}

export {
  Button,
  PageLink
}
export default Link;