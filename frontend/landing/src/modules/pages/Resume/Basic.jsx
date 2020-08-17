/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import parse from 'html-react-parser';

// Import components
import Document from 'modules/common/Document';
import Icon from 'modules/common/Icon';

// Import data
import resume from 'data/resume';

const Basic = ({ className }) => {
  const style = css`
    display: grid;
    grid-template-rows: repeat(5, min-content);
    grid-row-gap: 0.5rem;
    padding: 1rem;
    font-size: 14px;
    background: white;

    .contact {
      display: grid;
      grid-template-columns: 0.8fr 1fr 0.8fr;
      height: max-content;

      .name {
        font-family: Lato;
        font-weight: 700;
        font-size: 2rem;
        text-align: center;
        margin: auto;
      }

      .basic {
        text-align: right;
        a {
          grid-template-columns: auto 15px;
          span { margin-right: 6px; }
        }
      }

      .social {
        a {
          grid-template-columns: 15px auto;
          span { margin-left: 6px; }
        }
      }

      
      a {
        display: grid;
        align-items: center;
  
        svg { font-size: 15px; }
      }
    }

    .employment {
      display: grid;
      grid-gap: 1rem;
      div:nth-of-type(1) {
        margin-top: -0.5rem;
      }
    }

    .section-title {
      font-family: monospace;
      font-size: 1.25rem;
      font-weight: 600;
      border-bottom: 2px solid black;
    }

    .item-title {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      font-weight: bold;

      span {
        white-space: nowrap;
      } span:nth-of-type(2) {
        text-align: center;
      } span:nth-of-type(3) {
        text-align: right;
      }
    }

    a:hover {
      color: blue;
    }
  `;

  return (
    <Document css={style} className={className}>
      <div className="contact">
        <div className="social">
          
          <a href={resume.contact.website.url}>
            <Icon icon={'FaGlobe'}/><span>{resume.contact.website.text}</span>
          </a>
          <a href={resume.contact.linkedin.url}>
            <Icon icon={'FaLinkedinIn'}/><span>{resume.contact.linkedin.text}</span>
          </a>
          <a href={resume.contact.github.url}>
            <Icon icon={'FaGithub'}/><span>{resume.contact.github.text}</span>
          </a>
        </div>
        <div className="name">
          {resume.contact.name}
        </div>
        <div className="basic">
          <a href={resume.contact.phone.url}>
            <span>{resume.contact.phone.text}</span><Icon icon={'FaPhone'}/>
          </a>
          <a href={resume.contact.email.url}>
            <span>{resume.contact.email.text}</span><Icon icon={'FaEnvelope'}/>
          </a>
          <a href={resume.contact.address.url}>
            <span>{resume.contact.address.text}</span><Icon icon={'FaMapMarkerAlt'}/>
          </a>
        </div>
      </div>
      <div className="education">
        <h3 className="section-title">Education</h3>
        <div className="item-title">
          <span>{resume.education.location}</span>
          <span>{resume.education.university}</span>
          <span>{resume.education.time}</span>
        </div>
        <ul>
          <li><b>Major:</b> {resume.education.major}</li>
          <li><b>Coursework: </b><i>(fundamentals): </i>{resume.education.coursework.fundamentals} <i>(topics): </i>{resume.education.coursework.topics}</li>
        </ul>
      </div>
      <div className="employment">
        <h3 className="section-title">Employment</h3>
        {resume.employment.map((employed, i) => {
          return (
            <div key={i}>
              <div className="item-title">
                <span>{employed.position}</span>
                <span><a href={employed.website}>{employed.company}</a></span>
                <span>{employed.time}</span>
              </div>
              <p>{employed.description}</p>
              <ul>
                {employed.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
                <li><u>Leveraged knowledge</u> in {employed.leveraged}</li>
              </ul>
            </div>
          )
        })}
      </div>
      <div className="projects">
        <h3 className="section-title">Projects</h3>
        {resume.projects.map((project, i) => {
          return (
            <div key={i}>
              <b>{project.name + ': '}</b>{parse(project.desc)}
              <ul>
                {project.highlights.length === 0 ? '' : project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
                <li><u>Utilized:</u> {project.utilized}</li>
              </ul>
            </div>
          )
        })}
      </div>
      <div className="skills">
        <h3 className="section-title">Skills</h3>
        <p><b>Software: </b><i>(proficient): </i>{resume.skills.proficient} | <i>(familiar): </i>{resume.skills.familiar}</p>
      </div>
    </Document>
  );
}

export default Basic;