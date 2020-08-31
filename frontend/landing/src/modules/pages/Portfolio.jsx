/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from "react-router-dom";

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Image from 'modules/common/Image';
import Icon from 'modules/common/Icon';

// Import helpers
import { elevate, mq, color } from 'helpers';

const projects = [
  {
    name: "PhoenixHacks Live",
    summary: "The live site for PhoenixHacks 2020.",
    status: 'complete',
    //image: "phoenixhacks.png",
    url: {
      demo: "https://live.phoenixhacks.com/",
      repo: "https://github.com/PhoenixHacks/2020-live-web"
    },
    tags: ['javascript', 'nodejs', 'reactjs', 'HTML', 'CSS']
  },
  {
    name: "Suspect Search",
    summary: "Use geolocation and verbal description to identify nearby suspects.",
    status: 'complete',
    //image: "moto-avigilon.jpg",
    url: {
      demo: "",
      repo: ""
    },
    tags: ['python']
  },
  {
    name: "RGB-D Based RTLS",
    summary: "Track and visualize people in a room.",
    status: 'complete',
    //image: "RGB-D.jpg",
    url: {
      demo: "",
      repo: ""
    },
    tags: ['computer vision', 'python', 'opencv']
  },
  {
    name: "Gaze-Based UI Navigation",
    summary: "Move your mouse to your gaze's destination.",
    status: 'haitus',
    //image: "hyperbolic.png",
    url: {
      demo: "",
      repo: ""
    },
    tags: ['computer vision', 'python', 'opencv', 'human-computer interaction']
  },
  {
    name: "Patient Egress Alert System",
    summary: "Detects if a patient is leaving their bed.",
    //image: "VDS.png",
    status: 'complete', // 'unsatisfied completion'?
    url: {
      demo: "",
      repo: ""
    },
    tags: ['computer vision', 'python', 'opencv']
  },
  {
    name: "Renegade",
    summary: "A level 3 autonomous vehicle.",
    status: 'complete',
    //image: "renegade.jpg",
    url: {
      demo: "",
      repo: "https://github.com/jwmcgettigan/renegade"
    },
    tags: ['computer vision', 'python', 'opencv', 'lidar', 'stereoscopic camera', 'autonomous systems']
  },
  {
    name: "Project Euler",
    summary: "My answers to Project Euler problems.",
    status: 'in progress',
    //image: "renegade.jpg",
    url: {
      demo: "",
      repo: "https://github.com/jwmcgettigan/project-euler-solutions"
    },
    tags: ['python', 'javascript', 'math']
  }
];

/**
 * I should have a section for github stats if there is a github link.
 * Show tags over tinted image on hover over card.
 * Show status to the right of the project name.
 */
const ProjectCard = ({ project, ...rest}) => {
  const style = theme => css`
    ${elevate(1)};
    border-radius: 4px;

    .info {
      padding: 0 1rem 1rem 1rem;

      h4 {
        font-weight: 500;
      }
      p {
        font-size: 1rem;
      }
    }

    &:hover {
      transition: all 0.01s ease-in-out;
      ${elevate(4)};
      transform: scale(1.01, 1.01);
    }
  `;

  const imageStyle = theme => css`
    min-width: 16rem;
    height: 16rem;

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

    .tags {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;

      //display: flex;
      flex-wrap: wrap;

      & > div {
        font-size: 1rem;
        background: ${theme.secondary.light};
        color: ${color(theme.secondary.light).getContrastText(15).str};
        padding: .2em .5em .3em;
        margin: 0 0.5em 0.5em 0;
        ${elevate(1)};
      }
    }

    &:hover {
      .tags {
        display: flex;
      }
    }
  `;

  return (
    <div css={style} {...rest}>
      <Image css={imageStyle} src={project.image} alt=''>
        { project.icon != null
          ? <Icon icon={project.icon}/>
          : <Icon icon='FaExclamationTriangle'/>
        }
        <div className="tags">
          {project.tags.map(tag => <div>{tag}</div>)}
        </div>
      </Image>
      <div className="info">
        <h4>{project.name}</h4>
        <p>{project.summary}</p>
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