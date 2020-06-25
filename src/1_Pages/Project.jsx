/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth } from '../4_Utilities';
import { Icon, Section, TitleSection } from '../2_Components';
import ReactMd from 'react-md-file';

const Info = ({ className }) => {
  const infoStyle = theme => css(`
    //! background: color(surface, dark);
    padding: 1.5rem;
    flex: 1 1 auto;

    h3, h4 {
      //! color: color(background, on, 0.95);
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    h3 {
      font-size: 1.5rem;
    } h4 {
      font-size: 1rem;
    }
    .metadata {
      display: grid;
      font-size: 1rem;
      margin-bottom: 1rem;

      svg {
        margin-right: 0.5rem;
      }
    }
    p {
      font-size: .875rem;
      margin-bottom: 1.5rem;
    }
    li {
      font-size: .875rem;
      margin-bottom: .5rem;
    }
  `)

  return (
    <div css={infoStyle} className={className}>
      <h3>{project.client.name}</h3>
      <div className="metadata">
        <span><Icon icon="FaIndustry"/>&nbsp;Industry: {project.client.industry}</span>
        <span><Icon icon="FaUsers"/>&nbsp;Size: {project.client.size}</span>
        <span><Icon icon="FaLink"/>&nbsp;Website: <a href={project.client.website}>{project.client.website}</a></span>
      </div>
      <p>{project.client.description}</p>
      <h4>Project Requirements</h4>
      <ul>
        {project.requirements.map((req, i) => <li key={i}>{req}</li>)}
      </ul>
    </div>
  )
}

const ClientSection = ({ project, className }) => {
  const clientStyle = theme => css(`
    display: flex;
    height: max-content;

    img {
      display: none;

      ${mq('tablet')} {
        display: grid;
        //! background: color(surface, dark);
        padding: 1.5rem;
        object-fit: cover;
        object-position: top;
        width: 30%;
        max-width: 24rem;
      }
    }
  `)

  return (
    <Section css={clientStyle} className={className}>
      <img src={require("../../assets/Projects/" + project.image)} alt=""/>
      <Info/>
    </Section>
  )
}

const ProjectContent = ({ project, className }) => {
  return (
    <Section className={className}>
      <ReactMd fileName={project.content}/>
    </Section>
  )
}

const Project = ({ project, className }) => {
  return (
    <main className={className}>
      <TitleSection>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
      </TitleSection>
      <ClientSection project={project}/>
      <ProjectContent project={project}/>
    </main>
  )
}

export default Project;