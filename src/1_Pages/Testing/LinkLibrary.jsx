/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { Library } from '../../2_Components';
import { links } from '../../3_Data';
import { bp, mq, zDepth } from '../../4_Utilities';

const LinkLibrary = ({ className }) => (
  <main className={className}>
    <Library library={links.library} />
  </main>
)

export default LinkLibrary;