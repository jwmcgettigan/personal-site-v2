/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { Link, LinkContent, Icon } from '../../2_Components';
import { mq, zDepth, color } from '../../4_Utilities';
//import { saveAs } from 'file-saver';

/* const content = fetch('/resume/print2')
.then(response => response.text())
const converted = htmlDocx.asBlob(content); */
//saveAs(converted, 'test.docx');
//console.log(htmlS)

//import { resume } from '../../../3_Data';
const parser = new DOMParser();
const htmlParser = (htmlString) => parser.parseFromString(htmlString, "text/html").getElementsByTagName("BODY")[0].innerHTML;

const resume = {
  contact: {
    name: "Justin McGettigan",
    phone: {
      text: "‪(352) 585-9655‬",
      url: "tel:+1-352-585-9655‬",
      icon: "FaPhone"
    },
    email: {
      text: "jwmcgettigan@gmail.com",
      url: "mailto:jwmcgettigan@gmail.com",
      icon: "FaEnvelope"
    },
    address: {
      text: "Webster, FL",
      url: "https://www.google.com/maps/place/Webster+FL",
      icon: "FaMapMarkerAlt"
    },
    website: {
      text: "www.jwmcgettigan.com",
      url: "https://jwmcgettigan.com",
      icon: "FaGlobe"
    },
    github: {
      text: "github.com/jwmcgettigan",
      url: "https://github.com/jwmcgettigan",
      icon: "FaGithub"
    },
    linkedin: {
      text: "linkedin.com/in/jwmcgettigan",
      url: "https://linkedin.com/in/jwmcgettigan",
      icon: "FaLinkedinIn"
    }
  },
  education: {
    university: "Florida Polytechnic University",
    website: "http://floridapoly.edu/",
    location: "Lakeland, FL",
    time: "Aug 2016 - Dec 2019",
    major: "Computer Science, B.S. (GPA: 3.8)",
    concentration: "Cyber Security",
    coursework: [], // Select the relevant coursework depending on the role and focus
  },
  employment: [ // Select the relevant employement depending on the role and focus
    {
      company: "Motorola Solutions",
      position: "Software Engineer Intern",
      description: "Systems and Solutions team for Innovation Design and Realization.",
      website: "https://www.motorolasolutions.com/",
      time: "May 2019-Aug 2019",
      highlights: [
        "Prototyped a cost-efficient RGB-D based RTLS, similar to OpenPTrack, by testing different RTLS's for people tracking, creating deployment models, and performing cost-benefit and feasibility analyses.",
        "Visualized the distance of persons based upon the strength of their phones' bluetooth signal from a point by using plot.ly to process data through an Azure API",
        "Collaborated with a team on a hackathon project (Suspect Search) by implementing the keyword detection, speech-to-text, and natural language processing components.",
      ],
      leveraged: "Git, Docker, C, C++, Python, OpenCV, Matrix Math, Azure App/Log Analytics, plot.ly, Grafana, Intel RealSense SDK & D435 RGB-D camera."
    },
    {
      company: "Maven Asset Management",
      position: "IT Administrator",
      description: "",
      website: "https://www.mavenasset.com/",
      time: "Feb 2017-May 2019",
      highlights: [
        "Refined management of Windows and Linux development VM's through VMware vSphere by crafting templates, standardizing server documentation, and automating server updates and backups.",
        "Improved company website security and performance by active WordPress updates, backups, and database optimization.",
        "Implemented a network monitor, firewall and VPN, and centralized security administration by respectively creating a server for LibreNMS, pfSense, and Kaspersky Security Center.",
        "Assessed and inventoried the entire IT infrastructure by creating diagrams, supporting documentation, and advocating the use of management tools like Trello.",
      ],
      leveraged: "Virtualization(VMware vSphere), Bash Scripting, Network Security, Database Management, cPanel, WordPress"
    },
    {
      company: "Florida Polytechnic University",
      position: "Research Assistant",
      website: "",
      time: "May 2018-Dec 2018",
      highlights: [
        "Contributed to a survey of existing hardware accelerators for DNNs by analyzing over 30 relevant research papers."
      ],
      leveraged: ""
    }
  ],
  projects: [ // Select the relevant projects depending on the role and focus
    {
      name: "Personal Website",
      website: "https://jwmcgettigan.com",
      highlights: [
        "www.jwmcgettigan.com (for more information and projects)"
      ],
      utilized: "JavaScript, HTML, CSS, ReactJS, NodeJS, Git"
    },
    {
      name: "PhoenixHacks Live",
      website: "",
      highlights: [

      ],
      utilized: "JavaScript, HTML, CSS, ReactJS, NodeJS, Git"
    },
    {
      name: "Suspect Search",
      website: "",
      highlights: [

      ],
      utilized: "Python"
    },
    {
      name: "RGB-D Based RTLS",
      website: "",
      highlights: [

      ],
      utilized: "Python"
    },
    {
      name: "Gaze-Based UI Navigation",
      website: "",
      highlights: [

      ],
      utilized: "Python, OpenCV"
    },/*
    {
      name: "Patient Egress Alert System",
      website: "",
      highlights: [

      ],
      utilized: "Python, OpenCV"
    },*/
    {
      name: "Renegade",
      website: "",
      highlights: [
        "Lead a team of two in the creation and testing of software for a level 3 autonomous vehicle using computer vision and sensor fusion technologies."
      ],
      utilized: "Python, OpenCV, ROS, LiDAR, ZED Stereoscopic Camera, Nvidia TX2"
    }
  ],
  skills: {
    fluent: [],
    proficient: "Python, JavaScript, Java, Unix, Git, HTML/CSS",
    familiar: "C, C++, C#, SQL"
  }
}

const ResumeDoc2 = ({ className }) => {
  const theme = useTheme();
  const ratio = 8.5 / 11.0; // Letter(US) dimensions in inches (W/H)
  const inverseRatio = 11.0 / 8.5;
  const width = 816, height = width * inverseRatio;
  const resumeStyle = css(`
    display: grid;
    grid-template-rows: repeat(5, min-content);
    grid-row-gap: 0.5rem;
    padding: 2rem;
    width: ${width}px;
    height: ${height}px;
    border: 1px solid black;
    font-size: 14px;

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
          grid-template-columns: auto 17px;
          .text {margin-right: 6px;}
        }
      }

      .social {
        a {
          grid-template-columns: 17px auto;
          .text {margin-left: 6px;}
        }
      }

      
      a {
        display: grid;
        align-items: center;
  
        .icon {
          font-size: 17px;
        }
        .text {
          
        }
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
      color: ${theme.palette.resume.title};
    }
  `)

  return (
    <article css={resumeStyle} className={className}>
      <div className="contact">
        <div className="social">
          <Link url={resume.contact.website.url}>
            <LinkContent icon={resume.contact.website.icon} text={resume.contact.website.text}/>
          </Link>
          <Link url={resume.contact.linkedin.url}>
            <LinkContent icon={resume.contact.linkedin.icon} text={resume.contact.linkedin.text}/>
          </Link>
          <Link url={resume.contact.github.url}>
            <LinkContent icon={resume.contact.github.icon} text={resume.contact.github.text}/>
          </Link>
        </div>
        <div className="name">
          {resume.contact.name}
        </div>
        <div className="basic">
          <Link url={resume.contact.phone.url}>
            <LinkContent icon={resume.contact.phone.icon} text={resume.contact.phone.text} end/>
          </Link>
          <Link url={resume.contact.email.url}>
            <LinkContent icon={resume.contact.email.icon} text={resume.contact.email.text} end/>
          </Link>
          <Link url={resume.contact.address.url}>
            <LinkContent icon={resume.contact.address.icon} text={resume.contact.address.text} end/>
          </Link>
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
          <li><b>Concentration:</b> {resume.education.concentration}</li>
          <li><b>Coursework:</b> </li>
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
          const oneliner = project.highlights.length === 1;
          return (
            <div key={i}>
              <b>{project.name + ': '}</b>
              {oneliner ? project.highlights[0] : ''}
              <ul>
                {oneliner ? '' : project.highlights.map((highlight, i) => (
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
    </article>
  )
};

export default ResumeDoc2;