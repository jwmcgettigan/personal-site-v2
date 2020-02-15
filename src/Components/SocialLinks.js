import React from "react";
import * as Icons from 'react-icons/fa';
import links from '../data/links';

const Link = ({url, text, icon}) => {
  const Icon = Icons[icon.type]
  return (
    <a href={url}>
      <span title={text}>
        <Icon color={icon.color} size={40}/>
      </span>
    </a>
  )
}

const SocialLinks = () => (
  <div id="social-links">
    {links.profiles.map((p, i) => <Link key={i} url={p.url} text={p.network} icon={p.icon}/>)}
  </div>
)

export default SocialLinks