/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useContext } from 'react';
import { Icon, TransitionIcon } from '../../2_Components';
import { StateContext } from '../../4_Utilities';

const ThemeToggle = ({ className }) => {
  const toggleTheme = useContext(StateContext).toggleTheme;
  const theme = useTheme();

  const buttonStyle = css(`
    all: unset;
    display: flex;
    width: min-content;
    justify-self: center;
    align-self: end;
  `)

  const iconStyle = theme => css(`
    width: 3rem;
    height: 3rem;
    color: ${theme.palette.background};
  `)

  return (
    <button css={buttonStyle} onClick={() => toggleTheme()} className={className}>
      <Icon css={iconStyle} icon={
        theme.palette.type === 'light' ? 'FaToggleOff' : 'FaToggleOn'
        }/>
      {/* <TransitionIcon css={iconStyle} defaultIcon={'FaMoon'} transitionIcon={'FaSun'}/> */}
    </button>
  )
}

export default ThemeToggle;