/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// import * as Icons from 'react-icons/fa';
// Import Icons (manually instead of the above line to minimize file size)
import {
  FaGithub, FaGithubAlt, FaLinkedin, FaLinkedinIn,
  FaDev, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone,
  FaStackOverflow, FaFreeCodeCamp, FaUserAlt, FaCog,
  FaLaptopCode, FaFileAlt, FaLink, FaGraduationCap,
  FaGamepad, FaTools, FaExclamationTriangle, FaKey,
  FaEnvelopeOpenText, FaRegCopyright,
  FaPauseCircle, FaPlayCircle, FaStopCircle
} from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdWallpaper, MdKeyboardArrowRight } from 'react-icons/md';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';

const Icons = {
  FaGithub, FaGithubAlt, FaLinkedin, FaLinkedinIn,
  FaDev, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone,
  FaStackOverflow, FaFreeCodeCamp, FaUserAlt, FaCog,
  FaLaptopCode, FaFileAlt, FaLink, FaGraduationCap,
  FaGamepad, FaTools, FaExclamationTriangle, FaKey,
  FaEnvelopeOpenText, IoIosPaper, MdWallpaper, FaRegCopyright,
  RiGitRepositoryPrivateLine, MdKeyboardArrowRight,
  FaPauseCircle, FaPlayCircle, FaStopCircle
};

//DONE: I've verified that {...props} satisfies className={className}
const Icon = ({ icon, ...props }) => {
  const Icon = Icons[icon];
  return <Icon {...props}/>;
};

export default Icon;