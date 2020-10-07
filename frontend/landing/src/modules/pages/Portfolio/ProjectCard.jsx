//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

// Import components
import Image from 'modules/common/Image';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';

// Import helpers
import { elevate, mq, color } from 'helpers';

//#endregion

/**
 * Component for toggling the visibility of tags for a project card.
 */
const TagsToggle = (props) => {

  //#region CSS

  const style = theme => css`
    font-size: 1rem;
    border-radius: 25%;
    background: ${color(theme.secondary.light).setAlpha(0.5).str};
    color: ${color(theme.secondary.light).getContrastText(15).str};
    border: 1px solid ${color(theme.secondary.light).getContrastText(5).str};
    //padding: .2em .5em .3em;
    margin: 0 0.5em 0.5em 0;
    ${elevate(4)};
    cursor: pointer;
    font-weight: 500;
    //pointer-events: none;
    display: grid;
    align-items: center;
    justify-items: center;
    height: 2rem;
    width: 2rem;

    svg {
      height: 80%;
      width: 80%;
    }

    &:hover {
      color: ${color('#fff').getContrastText(15).str};
    }
  `;

  //#endregion

  //#region JSX

  return (
    <div css={style} {...props}>
      <Icon icon='FaTags'/>
    </div>
  );

  //#endregion
};


//TODO: I should have a section for github stats if there is a github link.
//TODO: Show tags over tinted image on hover over card.
//TODO: Show status to the right of the project name.
/**
 * Component that shows a name, description, image, tags, status,
 * and date of a project.  Links to a relevant project page.
 */
const ProjectCard = ({ project, ...rest}) => {
  const [showTags, setShowTags] = useState(false);

  //#region CSS

  const style = theme => css`
    ${elevate(1)};
    border-radius: 4px;
    display: grid;
    grid-template-rows: min-content 1fr;
    align-content: flex-start;

    .info {
      display: grid;
      gap: 0.25rem;
      grid-template-rows: min-content auto min-content;
      padding: 0.5rem 1rem 1rem 1rem;

      h4 {
        font-weight: 500;
      }
      p {
        font-size: 1rem;
      }

      .bottom {
        display: grid;
        grid-template-columns: auto min-content;
        align-items: center;
        margin-top: 0.5rem;

        .urls {
          display: grid;
          grid-auto-flow: column;
          gap: 1rem;
          justify-content: left;
          a {
            display: grid;
            align-content: center;

            span {
              background: grey;
              border-radius: 4px;
              //background: ${theme.secondary.light};
              //color: ${color(theme.secondary.light).getContrastText(15).str};
              //padding: .1em .25em .15em;
            }
          }
        }

        p {
          white-space: nowrap;
          //font-style: italic;
          font-family: monospace;
          font-weight: 600;
          font-size: 1rem;
        }
      }

      .name-status {
        display: grid;
        grid-template-columns: auto min-content;
        align-items: center;
      }
    }

    &:hover {
      transition: all 0.01s ease-in-out;
      ${elevate(4)};
      transform: scale3d(1.01, 1.01, 1);
    }

    a:hover {
      color: ${theme.primary.A200};
    }
  `;

  const imageLinkStyle = theme => css`
    min-width: 16rem;
    height: 16rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    .tagsToggle {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;
    }

    .tags {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;

      //display: flex;
      flex-wrap: wrap;
      align-items: center;

      & > span {
        font-size: 1rem;
        background: ${theme.secondary.light};
        color: ${color(theme.secondary.light).getContrastText(15).str};
        padding: .2em .5em .3em;
        margin: 0 0.5em 0.5em 0;
        ${elevate(1)};
        cursor: pointer;
        font-weight: 500;

        &:hover {
          color: ${color('#fff').getContrastText(15).str};
        }
      }
    }

    &:hover {
      ${ showTags ? css`
        .tags {
          display: flex;
          div > svg {
            height: 50%;
            width: 50%;
          }
        }
        .tagsToggle {
          display: none;
        }
      ` : ''};
      ${mq('desktop')} {
        .tags {
          display: flex;
          div > svg {
            height: 50%;
            width: 50%;
          }
        }
        .tagsToggle {
          display: none;
        }
      }
    }
    ${mq('desktop')} {
      ${ showTags ? css`
        .tags {
          display: flex;
          div > svg {
            height: 50%;
            width: 50%;
          }
        }
        .tagsToggle {
          display: none;
        }
      ` : ''};
    }
  `;

  const imageStyle = theme => css`
    min-width: 16rem;
    height: 16rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    &:hover {
      &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-sizing: inherit;
        border: inherit;
        border-radius: inherit;
        background: rgba(0,0,0, 0.2);
        pointer-events: none;
      }
    }
  `;

  const imageStyle2 = css`
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  `;

  //#endregion

  //#region JSX
  return (
    <div css={style} {...rest}>

      <div css={imageLinkStyle}>

        <NavLink to={project.path} exact>
          {project.video == null 
          ? <Image css={imageStyle} src={project.image} alt='' icon={project.icon}/>
          : <div css={imageStyle}>
              <video css={imageStyle2} autoPlay loop muted playsInline>
                <source src={project.video} type="video/mp4"/>
              </video> 
            </div>
          }
        </NavLink>

        <div className="tags">
          <TagsToggle onClick={() => setShowTags(showTags => !showTags)}/>
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>

        <div className="tagsToggle">
          <TagsToggle onClick={() => setShowTags(showTags => !showTags)}/>
        </div>

      </div>

      <div className="info">

        <div className="name-status">
          <NavLink to={project.path} exact>
            <h4>{project.name}</h4>
          </NavLink>
          <div css={css`display: flex; gap: 0.5rem;`}>
            {project.isSeries ? <Icon icon={"FaRegListAlt"}/> : ''}
            <Icon icon={project.status.icon} title={project.status.title} css={css`color: ${project.status.color};`}/>
          </div>
        </div>

        <p>{project.summary}</p>
        <div className="bottom">
          <div className="urls">
            {project.urls.map((url, i) => {
              return (
                <Link key={i} href={url.href} newtab>
                  {url.icon != null ? <Icon icon={url.icon}/> : ''}
                  {url.text != null ? <span>{url.text}</span> : ''}
                </Link>
              )
            })}
          </div>
          <p>{project.lastActive}</p>

        </div>
      </div>

    </div>
  );
  //#endregion
};

export default ProjectCard;