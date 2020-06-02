import React from 'react';
import links from '../../../../data/links';

import Link from '../../../../Components/Link';
import './Info.scss';

const resume = links.resume

const QRCode = ({ text }) => (
  <div className="QRCode">
    {text}
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 25 25" stroke="none">
      <rect width="100%" height="100%" fill="rgb(255,255,255, 1)"/>
      <path d="M0,0h1v1h-1z M1,0h1v1h-1z M2,0h1v1h-1z M3,0h1v1h-1z M4,0h1v1h-1z M5,0h1v1h-1z M6,0h1v1h-1z M8,0h1v1h-1z M9,0h1v1h-1z M10,0h1v1h-1z M13,0h1v1h-1z M14,0h1v1h-1z M18,0h1v1h-1z M19,0h1v1h-1z M20,0h1v1h-1z M21,0h1v1h-1z M22,0h1v1h-1z M23,0h1v1h-1z M24,0h1v1h-1z M0,1h1v1h-1z M6,1h1v1h-1z M8,1h1v1h-1z M10,1h1v1h-1z M16,1h1v1h-1z M18,1h1v1h-1z M24,1h1v1h-1z M0,2h1v1h-1z M2,2h1v1h-1z M3,2h1v1h-1z M4,2h1v1h-1z M6,2h1v1h-1z M8,2h1v1h-1z M10,2h1v1h-1z M12,2h1v1h-1z M13,2h1v1h-1z M14,2h1v1h-1z M15,2h1v1h-1z M16,2h1v1h-1z M18,2h1v1h-1z M20,2h1v1h-1z M21,2h1v1h-1z M22,2h1v1h-1z M24,2h1v1h-1z M0,3h1v1h-1z M2,3h1v1h-1z M3,3h1v1h-1z M4,3h1v1h-1z M6,3h1v1h-1z M12,3h1v1h-1z M13,3h1v1h-1z M15,3h1v1h-1z M16,3h1v1h-1z M18,3h1v1h-1z M20,3h1v1h-1z M21,3h1v1h-1z M22,3h1v1h-1z M24,3h1v1h-1z M0,4h1v1h-1z M2,4h1v1h-1z M3,4h1v1h-1z M4,4h1v1h-1z M6,4h1v1h-1z M8,4h1v1h-1z M9,4h1v1h-1z M10,4h1v1h-1z M11,4h1v1h-1z M12,4h1v1h-1z M14,4h1v1h-1z M16,4h1v1h-1z M18,4h1v1h-1z M20,4h1v1h-1z M21,4h1v1h-1z M22,4h1v1h-1z M24,4h1v1h-1z M0,5h1v1h-1z M6,5h1v1h-1z M9,5h1v1h-1z M10,5h1v1h-1z M16,5h1v1h-1z M18,5h1v1h-1z M24,5h1v1h-1z M0,6h1v1h-1z M1,6h1v1h-1z M2,6h1v1h-1z M3,6h1v1h-1z M4,6h1v1h-1z M5,6h1v1h-1z M6,6h1v1h-1z M8,6h1v1h-1z M10,6h1v1h-1z M12,6h1v1h-1z M14,6h1v1h-1z M16,6h1v1h-1z M18,6h1v1h-1z M19,6h1v1h-1z M20,6h1v1h-1z M21,6h1v1h-1z M22,6h1v1h-1z M23,6h1v1h-1z M24,6h1v1h-1z M9,7h1v1h-1z M10,7h1v1h-1z M11,7h1v1h-1z M13,7h1v1h-1z M16,7h1v1h-1z M0,8h1v1h-1z M3,8h1v1h-1z M4,8h1v1h-1z M5,8h1v1h-1z M6,8h1v1h-1z M7,8h1v1h-1z M8,8h1v1h-1z M9,8h1v1h-1z M10,8h1v1h-1z M12,8h1v1h-1z M14,8h1v1h-1z M15,8h1v1h-1z M17,8h1v1h-1z M20,8h1v1h-1z M22,8h1v1h-1z M23,8h1v1h-1z M24,8h1v1h-1z M1,9h1v1h-1z M3,9h1v1h-1z M4,9h1v1h-1z M5,9h1v1h-1z M8,9h1v1h-1z M10,9h1v1h-1z M13,9h1v1h-1z M14,9h1v1h-1z M15,9h1v1h-1z M17,9h1v1h-1z M19,9h1v1h-1z M20,9h1v1h-1z M21,9h1v1h-1z M22,9h1v1h-1z M23,9h1v1h-1z M0,10h1v1h-1z M1,10h1v1h-1z M2,10h1v1h-1z M4,10h1v1h-1z M6,10h1v1h-1z M8,10h1v1h-1z M13,10h1v1h-1z M15,10h1v1h-1z M18,10h1v1h-1z M21,10h1v1h-1z M24,10h1v1h-1z M0,11h1v1h-1z M7,11h1v1h-1z M12,11h1v1h-1z M20,11h1v1h-1z M21,11h1v1h-1z M22,11h1v1h-1z M23,11h1v1h-1z M24,11h1v1h-1z M0,12h1v1h-1z M1,12h1v1h-1z M3,12h1v1h-1z M4,12h1v1h-1z M6,12h1v1h-1z M7,12h1v1h-1z M10,12h1v1h-1z M12,12h1v1h-1z M14,12h1v1h-1z M15,12h1v1h-1z M18,12h1v1h-1z M19,12h1v1h-1z M24,12h1v1h-1z M0,13h1v1h-1z M5,13h1v1h-1z M7,13h1v1h-1z M14,13h1v1h-1z M15,13h1v1h-1z M16,13h1v1h-1z M20,13h1v1h-1z M23,13h1v1h-1z M0,14h1v1h-1z M1,14h1v1h-1z M2,14h1v1h-1z M5,14h1v1h-1z M6,14h1v1h-1z M9,14h1v1h-1z M10,14h1v1h-1z M11,14h1v1h-1z M12,14h1v1h-1z M14,14h1v1h-1z M15,14h1v1h-1z M17,14h1v1h-1z M20,14h1v1h-1z M21,14h1v1h-1z M22,14h1v1h-1z M23,14h1v1h-1z M24,14h1v1h-1z M0,15h1v1h-1z M2,15h1v1h-1z M3,15h1v1h-1z M8,15h1v1h-1z M11,15h1v1h-1z M14,15h1v1h-1z M17,15h1v1h-1z M18,15h1v1h-1z M19,15h1v1h-1z M21,15h1v1h-1z M22,15h1v1h-1z M24,15h1v1h-1z M0,16h1v1h-1z M4,16h1v1h-1z M5,16h1v1h-1z M6,16h1v1h-1z M8,16h1v1h-1z M12,16h1v1h-1z M13,16h1v1h-1z M15,16h1v1h-1z M16,16h1v1h-1z M17,16h1v1h-1z M18,16h1v1h-1z M19,16h1v1h-1z M20,16h1v1h-1z M22,16h1v1h-1z M23,16h1v1h-1z M8,17h1v1h-1z M10,17h1v1h-1z M11,17h1v1h-1z M12,17h1v1h-1z M16,17h1v1h-1z M20,17h1v1h-1z M22,17h1v1h-1z M23,17h1v1h-1z M0,18h1v1h-1z M1,18h1v1h-1z M2,18h1v1h-1z M3,18h1v1h-1z M4,18h1v1h-1z M5,18h1v1h-1z M6,18h1v1h-1z M8,18h1v1h-1z M10,18h1v1h-1z M11,18h1v1h-1z M14,18h1v1h-1z M16,18h1v1h-1z M18,18h1v1h-1z M20,18h1v1h-1z M24,18h1v1h-1z M0,19h1v1h-1z M6,19h1v1h-1z M8,19h1v1h-1z M9,19h1v1h-1z M10,19h1v1h-1z M11,19h1v1h-1z M13,19h1v1h-1z M15,19h1v1h-1z M16,19h1v1h-1z M20,19h1v1h-1z M23,19h1v1h-1z M24,19h1v1h-1z M0,20h1v1h-1z M2,20h1v1h-1z M3,20h1v1h-1z M4,20h1v1h-1z M6,20h1v1h-1z M8,20h1v1h-1z M11,20h1v1h-1z M12,20h1v1h-1z M14,20h1v1h-1z M15,20h1v1h-1z M16,20h1v1h-1z M17,20h1v1h-1z M18,20h1v1h-1z M19,20h1v1h-1z M20,20h1v1h-1z M0,21h1v1h-1z M2,21h1v1h-1z M3,21h1v1h-1z M4,21h1v1h-1z M6,21h1v1h-1z M8,21h1v1h-1z M10,21h1v1h-1z M11,21h1v1h-1z M12,21h1v1h-1z M13,21h1v1h-1z M14,21h1v1h-1z M15,21h1v1h-1z M17,21h1v1h-1z M18,21h1v1h-1z M23,21h1v1h-1z M24,21h1v1h-1z M0,22h1v1h-1z M2,22h1v1h-1z M3,22h1v1h-1z M4,22h1v1h-1z M6,22h1v1h-1z M11,22h1v1h-1z M13,22h1v1h-1z M17,22h1v1h-1z M20,22h1v1h-1z M21,22h1v1h-1z M22,22h1v1h-1z M23,22h1v1h-1z M24,22h1v1h-1z M0,23h1v1h-1z M6,23h1v1h-1z M10,23h1v1h-1z M11,23h1v1h-1z M14,23h1v1h-1z M17,23h1v1h-1z M18,23h1v1h-1z M19,23h1v1h-1z M20,23h1v1h-1z M22,23h1v1h-1z M23,23h1v1h-1z M24,23h1v1h-1z M0,24h1v1h-1z M1,24h1v1h-1z M2,24h1v1h-1z M3,24h1v1h-1z M4,24h1v1h-1z M5,24h1v1h-1z M6,24h1v1h-1z M8,24h1v1h-1z M9,24h1v1h-1z M10,24h1v1h-1z M12,24h1v1h-1z M16,24h1v1h-1z M21,24h1v1h-1z M24,24h1v1h-1z" fill="#000000"/>
    </svg>
  </div>
)

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