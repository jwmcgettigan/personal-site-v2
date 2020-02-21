import React from 'react';
import links from '../../../../data/links';

import Link from '../../../../Components/Link';
import './Info.scss';

const resume = links.resume

const Info = ({basics}) => (
  <div id="info">
    <h1>
      JUSTIN<br/><span>MCGETTIGAN</span>
    </h1>
    <Link url={resume.website.url} text={resume.website.text} icon={resume.website.icon}/>
    <Link url={resume.email.url} text={resume.email.text} icon={resume.email.icon}/>
    <Link url={resume.location.url} text={resume.location.text + ' (✔️relocate)'} icon={resume.location.icon}/>
    {resume.profiles.map((profile, index) => (
      <Link key={index} url={profile.url} text={profile.network + ': ' + profile.username} icon={profile.icon}/>
    ))}
    <p>{basics.summary}</p>
  </div>
)

export default Info;