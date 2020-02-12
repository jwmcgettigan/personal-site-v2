import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library, icon as getIcon} from '@fortawesome/fontawesome-svg-core';
import {fas, faEnvelope, faMapMarkerAlt, faGlobe} from '@fortawesome/free-solid-svg-icons';
//import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab)

const Link = ({text, icon, link}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <span className="icon">{icon}</span><span className="text">{text}</span>
  </a>
)

const Icon = ({icon}) => (
  <FontAwesomeIcon icon={getIcon({prefix: icon.prefix, iconName: icon.name})}/>
)

const Info = ({basics}) => (
  <section id="info">
    <h1>{basics.name.toUpperCase().split(' ')[0]} <span>{basics.name.toUpperCase().split(' ')[1]}</span></h1>
    <Link text={basics.website.substring(8)} icon={<FontAwesomeIcon icon={faGlobe}/>} link={basics.website}/>
    <Link text={basics.email} icon={<FontAwesomeIcon icon={faEnvelope}/>} link={'mailto:' + basics.email}/>
    <Link text={basics.location.city + ', ' + basics.location.region} icon={<FontAwesomeIcon icon={faMapMarkerAlt}/>} link=""/>
    {basics.profiles.map((profile, index) => (
      <Link key={index} text={profile.network} icon={<Icon icon={profile.icon}/>} link={profile.url}/>
    ))}
    <p>{basics.summary}</p>
  </section>
)

export default Info;