import React from "react";
import Link from '../../Link';

import links from '../../../data/links';
import './SocialLinks.scss';

const SocialLinks = () => (
  <div id="social-links">
    {links.profiles.map((p, i) => <Link key={i} url={p.url} title={p.network} icon={p.icon}/>)}
  </div>
)

export default SocialLinks