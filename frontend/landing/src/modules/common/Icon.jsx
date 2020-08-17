/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// import * as Icons from 'react-icons/fa';
// Import Icons (manually instead of the above line to minimize file size)
import {
  FaGithub, FaGithubAlt, FaLinkedin, FaLinkedinIn,
  FaDev, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone,
  FaStackOverflow, FaFreeCodeCamp, FaUserAlt, FaCog,
  FaLaptopCode, FaFileAlt, FaLink, FaGraduationCap,
  FaGamepad, FaTools, FaExclamationTriangle,
  FaEnvelopeOpenText
} from 'react-icons/fa';

const Icons = {
  FaGithub, FaGithubAlt, FaLinkedin, FaLinkedinIn,
  FaDev, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone,
  FaStackOverflow, FaFreeCodeCamp, FaUserAlt, FaCog,
  FaLaptopCode, FaFileAlt, FaLink, FaGraduationCap,
  FaGamepad, FaTools, FaExclamationTriangle,
  FaEnvelopeOpenText
};

//DONE: I've verified that {...props} satisfies className={className}
const Icon = ({ icon, ...props }) => {
  const Icon = Icons[icon];
  return <Icon {...props}/>;
};

export default Icon;