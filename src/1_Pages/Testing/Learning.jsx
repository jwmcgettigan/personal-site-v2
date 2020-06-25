/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth } from '../../4_Utilities';

import { learning } from '../../3_Data';
import { Library } from '../../2_Components';


//! Have the more detailed/technical skills be on
//! my website while having more overarching (high level) skills
//! be on my resume | only include technical skills that are
//! relevent to the target job on my resume (same with projects)
//? skills, algorithms, techniques, and methods
const Learning = ({ className }) => {
  
  return (
    <main className={className}>
      <Library library={learning.library}/>
    </main>
  )
}

export default Learning;

//! CREATE A SEPARATE LIBRARY COMPONENT