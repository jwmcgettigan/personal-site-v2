/**
 * Name: Nonogram
 * Author: Justin McGettigan
 * Co-Author: Andy Gatza
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react';
import Board from './Board';

const Nonogram = ({}) => {
  const nonogramStyle = theme => css(`

  `)

  return (
    <Board size={[10, 10]}/>
  )
}

export default Nonogram;