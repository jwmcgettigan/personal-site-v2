//#region Imports

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
  FaEnvelopeOpenText, FaRegCopyright, FaFilePdf,
  FaPauseCircle, FaPlayCircle, FaStopCircle, FaFileWord,
  FaFile, FaTags, FaBook, FaRegListAlt
} from 'react-icons/fa';
import { IoIosPaper, IoMdDownload } from 'react-icons/io';
import { MdWallpaper, MdKeyboardArrowRight } from 'react-icons/md';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { GrDocumentTxt } from 'react-icons/gr';

//#endregion

const Icons = {
  FaGithub, FaGithubAlt, FaLinkedin, FaLinkedinIn,
  FaDev, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone,
  FaStackOverflow, FaFreeCodeCamp, FaUserAlt, FaCog,
  FaLaptopCode, FaFileAlt, FaLink, FaGraduationCap,
  FaGamepad, FaTools, FaExclamationTriangle, FaKey,
  FaEnvelopeOpenText, IoIosPaper, MdWallpaper, FaRegCopyright,
  RiGitRepositoryPrivateLine, MdKeyboardArrowRight,
  FaPauseCircle, FaPlayCircle, FaStopCircle, FaFilePdf,
  GrDocumentTxt, FaFileWord, FaFile, IoMdDownload, FaTags,
  FaBook, FaRegListAlt
};

/**
 * Component for displaying an icon from 'react-icons'.
 */
const Icon = ({ icon, ...rest }) => {
  const Icon = Icons[icon];
  return <Icon {...rest}/>;
};

export default Icon;