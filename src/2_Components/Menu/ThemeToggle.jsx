/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useContext } from 'react';
import { Icon } from '../../2_Components';
import { StateContext } from '../../4_Utilities';

const ThemeToggle = ({ className }) => {
  const toggleTheme = useContext(StateContext).toggleTheme;
  const theme = useTheme();

  const buttonStyle = css(`
    all: unset;
    display: flex;
    width: 3rem;
    height: auto;
    //margin: auto;
    justify-self: center;
    align-self: end;
    svg {
      width: 100%;
      height: 100%;
      color: ${theme.palette.background};
    }
  `)

  return (
    <button css={buttonStyle} onClick={() => toggleTheme()} className={className}>
      <Icon icon={
        theme.palette.type === 'light' ? 'FaToggleOff' : 'FaToggleOn'
        }/>
    </button>
  )
}

export default ThemeToggle;