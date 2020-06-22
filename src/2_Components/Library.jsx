/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { bp, mq, zDepth, color } from '../4_Utilities';

import { learning } from '../3_Data';
import { Section } from '../2_Components';

const Subcategory = ({ subcategory, className }) => {
  const subcategoryStyle = theme => css(`
    //background: ${theme.palette.secondary.main};
    background: ${theme.palette.surface};
    flex: 1 1 auto; 
    //width: 8em;
    
    width: min-content;
    white-space: nowrap;
    margin: 0 0.5em 2em 0.5em;
    //border: 1px solid ${theme.palette.secondary.light};
    padding: 0.7rem;

    ${zDepth(1, true)}

    h3 {
      margin-bottom: 0.5rem;
      //text-decoration: underline;
    }

    .subjects {
      display: grid;
      grid-gap: 0.5rem;
      font-weight: 500;

      a {
        ${zDepth(2, true)}
        padding: .2em .5em .3em;
        width: min-content;
        background: ${theme.palette.surface};
      }
    }
  `)

  return (
    <div css={subcategoryStyle} className={className}>
      <h3>{subcategory.name}</h3>
      <div className="subjects">
        {subcategory.items.map((item, i) => 
          <a href={item.url} key={i}>{item.name}</a>)}
      </div>
    </div>
  )
}

const Category = ({ category, className }) => {
  const categoryStyle = theme => css(`

    h1 {
      padding: 1rem 1rem 0 0.5rem;
      color: ${theme.palette.primary.main};
    }

    .subcategories {
      background: ${theme.palette.surface};
      padding: 1.5em 1.5em 0.5em 1.5em;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      //border-top: 4px solid ${theme.palette.secondary.main};
    }
  `)

  return (
    <div css={categoryStyle} className={className}>
      <h1>{category.name}</h1>
      <div className="subcategories">
        {category.subcategories.map((subcategory, i) =>
          <Subcategory key={i} subcategory={subcategory}/>
        )}
      </div>
    </div>
  )
}



const Library = ({ library, className}) => {
  const libraryStyle = theme => css(`
    display: grid;
    grid-gap: 3rem;
    color: ${color(theme.palette.surface).getContrastText(13)};
    width: 100%;
    padding: 0 !important;

    a:hover {
      color: ${theme.palette.secondary.light};
      cursor: pointer;
    }
  `)
  
  return (
    <Section css={libraryStyle}>
      {library.map((category, i) => (
        <Category key={i} category={category}/>
      ))}
    </Section>
  )
}

export default Library;

//! CREATE A SEPARATE LIBRARY COMPONENT