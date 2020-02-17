import React from 'react';
import * as Icons from 'react-icons/fa';
import links from '../../../data/links';

const Link = ({url, text, icon}) => {
  const Icon = Icons[icon.type]
  return (
    <a href={url}>
      <span className="icon" title={text}><Icon color={icon.color}/></span><span className="text">{text}</span>
    </a>
  )
}

const resume = links.resume

const Info = ({basics}) => (
  <section id="info">
    <h1>
      JUSTIN<br/><span>MCGETTIGAN</span>
    </h1>
    <Link url={resume.website.url} text={resume.website.text} icon={resume.website.icon}/>
    <Link url={resume.email.url} text={resume.email.text} icon={resume.email.icon}/>
    <Link url={resume.location.url} text={resume.location.text} icon={resume.location.icon}/>
    {resume.profiles.map((profile, index) => (
      <Link key={index} url={profile.url} text={profile.network + ': ' + profile.username} icon={profile.icon}/>
    ))}
    <p>{basics.summary}</p>
  </section>
)

export default Info;