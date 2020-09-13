/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from "react-router-dom";
import moment from 'moment';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Image from 'modules/common/Image';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';

// Import helpers
import { elevate, mq, color } from 'helpers';
import { useState } from 'react';

// use pause, play, & stop to indicate 'haitus', 'in progress', and 'done'
const lastActiveCurrent = moment().format('MMM YYYY');
const projects = [
  {
    name: "PhoenixHacks Live",
    summary: "The live site for PhoenixHacks 2020.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/PhoenixHacks Live.gif'),
    urls: [
      {
        href: 'https://live.phoenixhacks.com/',
        icon: 'FaGlobe'
      },
      {
        href: 'https://github.com/PhoenixHacks/2020-live-web',
        icon: 'FaGithub'
      }
    ],
    tags: ['javascript', 'nodejs', 'reactjs', 'HTML', 'CSS'],
    lastActive: 'Jan 2020'
  },
  {
    name: "Suspect Search",
    summary: "Use geolocation + verbal description + security cameras to find suspects.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/Suspect Search.jpg'),
    urls: [],
    tags: ['python', 'STT', 'NLP'],
    lastActive: 'July 2019'
  },
  {
    name: "RGB-D Based RTLS",
    summary: "Track and visualize people in a room.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/RGB-D Based RTLS.jpg'),
    urls: [],
    tags: ['computer vision', 'python', 'opencv'],
    lastActive: 'Aug 2019'
  },
  {
    name: "Gaze-Based UI Navigation",
    summary: "Move your mouse to your gaze's destination.",
    status: {
      title: 'Haitus',
      icon: 'FaPauseCircle',
      color: '#978840'
    },
    image: require('assets/projects/Gaze-Based UI Navigation.jpg'),
    urls: [],
    tags: ['computer vision', 'python', 'opencv', 'human-computer interaction'],
    lastActive: 'Dec 2019'
  },
  {
    name: "Patient Egress Alert System",
    summary: "Detects if a patient is leaving their bed.",
    image: require('assets/projects/Patient Egress Alert System.jpg'),
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    }, // 'unsatisfied completion'?
    urls: [],
    tags: ['computer vision', 'python', 'opencv'],
    lastActive: 'May 2019'
  },
  {
    name: "Renegade",
    summary: "A level 3 autonomous vehicle.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/Renegade.jpg'),
    urls: [
      {
        href: 'https://github.com/jwmcgettigan/renegade',
        icon: 'FaGithub'
      }
    ],
    tags: ['computer vision', 'python', 'opencv', 'lidar', 'stereoscopic camera', 'autonomous systems'],
    lastActive: 'May 2018'
  },
  {
    name: "Project Euler",
    summary: "My answers to Project Euler problems.",
    status: {
      title: 'In Progress',
      icon: 'FaPlayCircle',
      color: '#3e7068'
    },
    image: require('assets/projects/Project Euler.jpg'),
    urls: [
      {
        href: 'https://github.com/jwmcgettigan/project-euler-solutions',
        icon: 'FaGithub'
      }
    ],
    tags: ['python', 'javascript', 'math'],
    lastActive: lastActiveCurrent
  },
  {
    name: "My Personal Website",
    summary: "A place to advertise and express myself.",
    status: {
      title: 'In Progress',
      icon: 'FaPlayCircle',
      color: '#3e7068'
    },
    icon: 'FaGlobe',
    urls: [],
    tags: ['javascript', 'nodejs', 'reactjs', 'HTML', 'CSS', 'MongoDB', 'API', 'CMS', 'Docker', 'full-stack'],
    lastActive: lastActiveCurrent
  },
];
// derive the path for each project from its name
projects.map(project => {
  project.path = `/portfolio/${project.name.replace(/\s+/g, '-').toLowerCase()}`
})

// sort them by status, then by date
projects.sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive));

const TagsToggle = (props) => {
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

  return <div css={style} {...props}>
    <Icon icon='FaTags'/>
  </div>
} //() => setShowTags(state)

/**
 * I should have a section for github stats if there is a github link.
 * Show tags over tinted image on hover over card.
 * Show status to the right of the project name.
 */
const ProjectCard = ({ project, ...rest}) => {
  const [showTags, setShowTags] = useState(false);

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
      transform: scale(1.01, 1.01);
    }

    a:hover {
      color: ${theme.primary.A200};
    }

    //animation: breath 3s alternate infinite;

    @keyframes breath {
      0% {
        width: 50px;
        height: 50px;
      }
      100% {
        width: 500px;
        height: 500px;
      }
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

  return (
    <div css={style} {...rest}>
      <div css={imageLinkStyle}>
        <NavLink to={project.path} exact>
          <Image css={imageStyle} src={project.image} alt=''>
            { project.icon != null
              ? <Icon icon={project.icon}/>
              : <Icon icon='FaExclamationTriangle'/>
            }
          </Image>
        </NavLink>
        <div className="tags">
          <TagsToggle onClick={() => setShowTags(false)}/>
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="tagsToggle">
          <TagsToggle onClick={() => setShowTags(true)}/>
        </div>
      </div>
      <div className="info">
        <div className="name-status">
          <NavLink to={project.path} exact>
            <h4>{project.name}</h4>
          </NavLink>
          <Icon icon={project.status.icon} title={project.status.title} css={css`color: ${project.status.color};`}/>
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
};

const Portfolio = (props) => {
  const style = css`
    height: 100%;

    .projects {
      margin-top: 2rem;
      display: grid;
      grid-gap: 2rem;

      grid-template-columns: repeat(1, 1fr);
      ${mq('tablet-small')} {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem 1rem;
      }
      ${mq('tablet')} {
        grid-gap: 2rem;
      }
      ${mq('desktop')} {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>Portfolio</h2>
      </Header>
      <Section>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project}/>
          })}
        </div>
      </Section>
    </Main>
  );
};

export default {
  name: 'Portfolio',
  icon: 'FaLaptopCode',
  routeProps: {
    path: '/portfolio',
    exact: true,
    component: Portfolio
  }
};