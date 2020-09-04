/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Main from 'modules/common/Main';
import Basic from './Basic';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';

// Import helpers
import { mq, color, elevate } from 'helpers';

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
    ${docStyle};
    ${mq('desktop', 'max')} {
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

  const sectionStyle = css`
    padding: 0;
    display: grid;
    justify-items: center;

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