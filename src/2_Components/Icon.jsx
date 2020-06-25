import React from 'react';
import * as Icons from 'react-icons/fa';

const Icon = ({ icon, className }) => {
  if (icon === '') {
    return '';
  } else {
    const Icon = Icons[icon];
    return <Icon className={className}/>;
  }
}

export default Icon;