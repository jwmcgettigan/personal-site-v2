import React from 'react';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';

import './Link.scss';

const Link = ({url = '', icon = '', text = '', style = '', title = '', onclick = () => false}) => (
  <a href={url} onClick={onclick} title={title} className={style} target="_blank" rel="noopener noreferrer">
    <span className="icon"><Icon icon={icon}/></span><span className="text">{text}</span>
  </a>
)

const PageLink = ({page, style = ''}) => {
  //console.log(page);
  return (
  <NavLink to={page.path} className={style + ' nav-link'} exact>
    <Icon icon={page.icon}/>
    {page.name}
  </NavLink>)
}

const Button = ({url, type, page, icon, text, onclick}) => {
  //console.log(page);
  if (type === 'pagelink') {
    return <PageLink page={page} style="button"/>
  } else {
    return <Link style="button" url={url} icon={icon} text={text} onclick={onclick}/>
  }
}

export {
  Button,
  PageLink
}
export default Link;