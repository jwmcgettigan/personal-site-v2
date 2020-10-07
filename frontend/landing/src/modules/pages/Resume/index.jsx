//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Basic from './Basic';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';
import Article from 'modules/common/Article';

// Import helpers
import { mq, color, elevate } from 'helpers';

//#endregion

//#region Helpers & Data

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
    color: theme => css`background: ${color(theme.primary.lighter).adjustBrightness(10).str};`
  },
]

//#endregion

/**
 * Component for downloading a resume file.
 */
const DownloadButton = ({format: f, ...rest}) => {
  return (
    <h5 css={f.disable ? [f.color, css`pointer-events: none;`] : f.color} onClick={f.disable ? () => {} : () => downloadFile(f.filetype)} {...rest}>
      <Icon icon={f.icon}/>
      {f.disable && <div className="disable-overlay"/>}
      {<div className="download-overlay">{f.filetype}</div>}
    </h5>
  )
};

/**
 * Page for displaying my resume(s).
 */
const Resume = ({ className }) => {

  //#region CSS

  const style = theme => css`
    .download-buttons {
      z-index: 100;
      display: flex;
      margin-left: auto;
      gap: 1rem;
      margin-top: 1rem;
      //font-family: Rubik, 'Courier New', Courier, monospace;
      margin-top: 0;

      ${mq('phone', 'max')} {
        margin-left: 0;
        margin-top: 0.5rem;
      }

      h5 {
        display: grid;
        padding: 0.25rem 1rem;
        color: white;
        font-weight: 300;
        ${elevate(1)};
        cursor: pointer;
        justify-items: center;
        align-content: center;

        svg {
          color: white;
          width: 32px;
          height: auto;
        }

        &:hover {
          transform: scale(1.025);
          ${elevate(4)};
          .download-overlay {
            display: block;
          }
        }

        .disable-overlay {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          cursor: default;
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
          font-size: 2rem;
          text-align: center;
          background: ${color(theme.primary.main).setAlpha(0.8).str};
        }
      }
    }
  `;

  const headerStyle = css`
    ${mq('phone', 'max')} {
      height: max-content;
      .container {
        flex-direction: column;
      }
    }
  `;

  const docStyle = css`
    width: auto;
    height: auto;
    margin: -0.75rem;
    ${mq('tablet-small')} { margin: -1.25rem; }
    ${mq('tablet')} { margin: -2rem -3rem; }
    ${mq('desktop')} { margin: -2rem -4rem; }
  `;

  const basicStyle = css`
    ${docStyle};

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
        justify-content: left;
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

  //#endregion

  //#region JSX

  return (
    <Main css={style}>
      <Header css={headerStyle}>
        <h2>Resume</h2>
        <div className="download-buttons">
          {formats.map((format, i) => (
            <DownloadButton format={format} key={i}/>
          ))}
        </div>
      </Header>
      <Article>
        <Basic css={basicStyle}/>
      </Article>
    </Main>
  );

  //#endregion
};

export default {
  name: 'Resume',
  icon: 'FaFileAlt',
  routeProps: {
    path: '/resume',
    exact: true,
    component: Resume
  }
};