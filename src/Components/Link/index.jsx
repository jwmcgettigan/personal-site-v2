import React from 'react';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';

import './Link.scss';

//! Rather than passing in all of this info, why not pass in functions to differentiate link types?
// So that the focus is onClick instead of <a></a>

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'theme.palette.primary.main'
  },
}));


const Link = ({url = '', icon = '', text = '', style = '', title = '', newtab = true, onclick = () => false}) => {
  const classes = useStyles();
  return (
  <a href={url} onClick={onclick} title={title} className={style} target={newtab ? "_blank" : ""} rel="noopener noreferrer">
    <span className="icon"><Icon icon={icon}/></span><span className="text">{text}</span>
  </a>
)}

const PageLink = ({page, style = ''}) => {
  //console.log(page);
  return (
  <NavLink to={page.path} className={style + ' nav-link'} exact>
    <Icon icon={page.icon}/>
    {page.name}
  </NavLink>)
}

const Button = ({url, type, page, icon, style='', text, onclick, newtab}) => {
  //console.log(page);
  const classes = useStyles();
  if (type === 'pagelink') {
    return <PageLink page={page} style={" button"}/>
  } else {
    return <Link style={" button"} url={url} icon={icon} text={text} onclick={onclick} newtab={newtab}/>
  }
}

export {
  Button,
  PageLink
}
export default Link;