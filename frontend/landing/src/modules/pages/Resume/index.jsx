/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Basic from './Basic';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';

// Import helpers
import { mq, color, elevate } from 'helpers';

const downloadFile = (type) => {
  let file;
  const pdf = require('../../../assets/resume/resume.pdf');
  //const docx = require('../../assets/resume/resume.docx');
  const txt = require('../../../assets/resume/resume.txt');

  switch(type) {
    case '.pdf': file = pdf; break;
    case '.docx': console.log('Currently no docx file.'); break;//file = docx; break;
    case '.txt': file = txt; break;
    default: console.error("File doesn't exist.");
  }

  fetch(file).then(response => {
    response.blob().then(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `Justin-McGettigan-Resume${type}`;
      link.click();
    });
  });
};

const formats = [
  {
    icon: 'FaFilePdf',
    filetype: '.pdf',
    color: theme => css`background: ${theme.secondary.A400};`
  },
  {
    icon: 'FaFileWord',
    filetype: '.docx',
    color: css`background: #2b5797;`,
    disable: true
  },
  {
    icon: 'FaFileAlt',
    filetype: '.txt',
    color: theme => css`background: ${theme.primary.lighter};`
  },
]

const Resume = ({ className }) => {
  const style = theme => css`
    display: grid;
    //justify-items: right;

    a {
      //text-decoration: underline;
      //text-decoration-color: ${color(theme.foreground).getContrastText(1.4).str};
      &:hover {
        color: ${theme.primary.A700} !important;
        text-decoration: underline;
        text-decoration-color: #000;
      }
    }
  `;

  const docStyle = css`
    //margin-top: 3rem;
    ${elevate(8)};
    //transform: rotate3d(1, 1, 1, 45deg);
  `;

  const basicStyle = css`
    ${mq('desktop')} {
      justify-self: left;
    }
    ${docStyle};
    @media (max-width: 1343px) {
      margin: 0;
      width: auto;
      height: auto;
    }

    ${mq('tablet', 'max')} {
      .contact {
        grid-template-columns: none;
        gap: 1rem;

        .basic { grid-row: 2; }
        .name { grid-row: 1; grid-column: 1 / 3; }
        .social { grid-row: 2; }
      }

      .item-title {
        grid-template-columns: none;
        justify-items: left;
      }
    }

    ${mq('phablet', 'max')} {
      .contact {
        .basic { 
          grid-row: 2; grid-column: 2;
          justify-self: left;
          a {
            grid-template-columns: 15px auto;
            span {
              grid-column: 2; grid-row: 1;
              text-align: left;
              margin-left: 6px;
            }
            svg {
              grid-column: 1; grid-row: 1;
            }
          }
        }
        .name { grid-row: 1 / 4; grid-column: 1; }
        .social { grid-row: 3; grid-column: 2; }
      }
    }

    ${mq('phone-wide', 'max')} {
      .contact {
        justify-content: center;
        .basic { 
          grid-row: 2; grid-column: 1;
          a {
            grid-template-columns: 15px auto;
            span {
              grid-column: 2; grid-row: 1;
              text-align: left;
              margin-left: 6px;
            }
            svg {
              grid-column: 1; grid-row: 1;
            }
          }
        }
        .name { grid-row: 1; grid-column: 1; }
        .social { grid-row: 3; grid-column: 1; }
      }
    }
  `;

  const sectionStyle = theme => css`
    padding: 0;
    display: grid;
    gap: 1rem;
    justify-items: center;

    ${mq('tablet-wide')} {
      gap: 3rem;
    }

    ${mq('desktop')} {
      gap: 2rem;
      grid-auto-flow: column;
    }

    ${mq('desktop-wide')} {
      gap: 3rem;
    }

    .download-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
      font-family: Rubik, 'Courier New', Courier, monospace;

      ${mq('tablet-wide')} {
        margin-top: 0;
      }

      ${mq('desktop')} {
        display: grid;
        grid-auto-flow: row;
        justify-self: right;
        align-content: flex-start;
      }

      h4 {
        display: grid;
        //padding: 0.5rem 1rem;
        padding: 0.5rem 1rem;
        width: 6rem;
        color: white;
        font-weight: 300;
        ${elevate(4)};
        cursor: pointer;
        justify-items: center;
        align-content: center;

        ${mq('desktop')} {
          width: 8rem;
          padding: 1rem 2rem;
        }

        svg {
          color: white;
          width: 100%;
          height: auto;
        }

        &:hover {
          //color: ${theme.primary.A100};
          transform: scale(1.025);
          ${elevate(8)};
          svg {
            //color: ${theme.primary.A100};
          }
          .download-overlay {
            display: grid;
            color: ${theme.primary.A100};
            svg {
              color: ${theme.primary.A100};
            }
          }
        }

        .disable-overlay {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          cursor: default;
          //background: ${color(theme.primary.main).setAlpha(0.9).str};
          background: repeating-linear-gradient(
            45deg,
            ${color(theme.primary.main).setAlpha(0.5).str},
            ${color(theme.primary.main).setAlpha(0.5).str} 10px,
            ${color(theme.primary.main).setAlpha(0.9).str} 10px,
            ${color(theme.primary.main).setAlpha(0.9).str} 20px
          );
        }

        .download-overlay {
          display: none;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: ${color(theme.primary.main).setAlpha(0.8).str};
          svg {
            top: 0.25rem;
            ${mq('desktop')} {
              top: -0.25rem;
            }
          }
        }
      }
    }

    .wrapper {
      //width: 25.5rem;
      //height: 33rem;
      width: 10.1rem;
      height: 13rem;

      .download-page {
        transform: scale(0.2);
        transform-origin: top left;
        ${elevate(1)};

        &:hover {
          animation: spinner 5s linear infinite;
        }

        @keyframes spinner {
          0% {
            transform: scale(0.2) rotateX(30deg) rotateY(0deg);
          }
          100% {
            transform: scale(0.2) rotateX(30deg) rotateY(-360deg);
          }
        }
      }
    }
  `;

  return (
    <Main css={style}>
      <Header>
        <h2>Resume</h2>
      </Header>
      {/* <Basic css={basicStyle}/> */}
      <Section css={sectionStyle}>
        {/* <div className="wrapper">
          <Basic className="download-page"/>
        </div> */}
        <div className="download-buttons">
          {formats.map(f => (
            <h4 css={f.disable ? [f.color, css`pointer-events: none;`] : f.color} onClick={f.disable ? '' : () => downloadFile(f.filetype)}>
              <Icon icon={f.icon}/>
              {f.filetype}
              {f.disable && <div className="disable-overlay"/>}
              {<div className="download-overlay"><Icon icon="IoMdDownload"/></div>}
            </h4>
          ))}
        </div>
        <Basic css={basicStyle}/>
      </Section>
    </Main>
  );
}

export default {
  name: 'Resume',
  icon: 'FaFileAlt',
  routeProps: {
    path: '/resume',
    exact: true,
    component: Resume
  }
};