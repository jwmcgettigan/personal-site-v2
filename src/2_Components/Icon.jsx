import React from 'react';
import * as Icons from 'react-icons/fa';

const Icon = ({icon}) => {
  if (icon === '') {
    return '';
  } else {
    const Icon = Icons[icon];
    return <Icon/>;
  }
}

export default Icon;