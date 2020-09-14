/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';
import ProjectCard from './ProjectCard';

// Import helpers
import { elevate, mq, color } from 'helpers';

// Import data
import projects from './projects';

const Portfolio = (props) => {
  const style = theme => css`
    height: 100%;

    .legend-container {
      display: flex;
      flex-wrap: wrap;
      gap:1rem;

      .legend {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        align-self: center;
        height: 100%;
        width: 100%;

        span {
          width: min-content;
          white-space: nowrap;
          display: flex;
          gap: 0.2rem;
          align-items: center;
          font-size: 1rem;
          background: ${theme.primary.light};
          color: ${color(theme.primary.light).getContrastText(15).str};
          padding: .2rem .5rem .3rem;
          margin: 0.25rem 0 0.25rem 0;
          ${elevate(1)};
          cursor: default;
          font-weight: 500;
        }
        .tags { background: ${color(theme.secondary.light).setAlpha(0.8).str}; }
        .play { background: #3e7068; }
        .pause { background: #978840; }
        .stop { background: #975450; }
      }
    }

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
        <div className="legend-container">
          <h2>Projects</h2>
          <div className="legend">
            <span className="tags"><Icon icon="FaTags"/>{"Tags"}</span>
            <span><Icon icon="FaGlobe"/>{"Demo"}</span>
            <span><Icon icon="FaGithub"/>{"Repo"}</span>
            <span className="play"><Icon icon="FaPlayCircle"/>{"In Progress"}</span>
            <span className="pause"><Icon icon="FaPauseCircle"/>{"Haitus"}</span>
            <span className="stop"><Icon icon="FaStopCircle"/>{"Complete"}</span>
          </div>
        </div>
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