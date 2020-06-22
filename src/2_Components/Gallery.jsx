/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { NavLink } from 'react-router-dom';
import { Icon, Image } from '../2_Components';
import { projects } from '../3_Data';
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth, color } from '../4_Utilities';
import Section from './Section';

const projectPages = [
  {
    name: "Project One",
    image: require('../assets/Projects/phoenixhacks.svg'),
    path: '/project/project-one',
  }
]

const PageCard = ({ subpath, page, className }) => {
  const imageExists = page.image != null;
  const theme = useTheme();

  const pageCardStyle = css(`
    display: grid;
    grid-template-rows: min-content auto;
    overflow: hidden;
    width: 100%;
    background: ${theme.palette.surface};
    color: ${color(theme.palette.background).getContrastText()};
    border-radius: 3px;
    ${zDepth(2, true)}

    &:hover {
      transition: all 0.01s ease-in-out;
      ${zDepth(5, true)}
      transform: scale(1.01, 1.01);
      color: ${color(theme.palette.background).getContrastText()};
    }
  `)

  const imageStyle = css(`
    width: 100%;
    //max-width: 22rem;
    min-width: 16rem;
    height: 16rem;
  `)

  const infoStyle = css(`
    padding: 1rem;

    h3 {
      font-size: 1.125rem;
      //margin-bottom: 0.75rem;
      line-height: 1.2;
      font-weight: 500;
    }
  `)

  return (
  <NavLink to={subpath + page.path} css={pageCardStyle} className={className} exact>
    <Image css={imageStyle} image={page.image} alt={""}>
      {page.icon != null ? <Icon icon={page.icon}/> : ''}
    </Image>
    <div css={infoStyle}>
      <h3>{page.name}</h3>
    </div>
  </NavLink>
)}

const galleryStyle = css(`
  display: grid;
  grid-gap: 3rem 2rem;
  //grid-template-columns: repeat(1, minmax(16rem, 1fr));
  //grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-columns: repeat(1, 1fr);

  ${mq('tablet-small')} {
    //grid-template-columns: repeat(2, minmax(16rem, 1fr));
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq('desktop')} {
    //grid-template-columns: repeat(3, minmax(16rem, 1fr));
    grid-template-columns: repeat(3, 1fr);
  }
`)

const Gallery = ({ subpath, pages, n=-1, slider, className }) => {
  return (
    <Section css={galleryStyle} className={className}>
      {pages.map((page, index) => {
        if (n < 0 || index <= n-1) {
          return <PageCard key={index} subpath={subpath} page={page}/>
        }
      })}
    </Section>
  )
}
 
export default Gallery;