/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';

// Import helpers
import { elevate, mq, color, googleFileURL } from 'helpers';

const MyPersonalWebsite = (props) => {
  const style = theme => css`
    height: 100%;

    h4 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }
  `;

  const sectionStyle = theme => css`
    display: grid;
    gap: 2rem;
    height: 100%;
    //font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 1.5rem;

    & > div {
      display: grid;
      gap: 1rem;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .block {
      display: grid;
      align-content: flex-start;
      gap: 0.75rem;
      h3 { 
        margin-bottom: 1rem;
      }
    }

    h3 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }

    b {
      font-weight: 500;
    }

    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
      }
    }

    .repo-card {
      display: grid;
      align-content: flex-start;
      height: auto;

      .header {
        display: grid;
        justify-content: center;

        .name {
          line-height: 1;
        }
      }

      .content {
        height: auto;
      }

      .status {
        position: relative;
        height: auto;
        line-height: normal;
        li {
          display: flex;
          justify-content: center;
          strong { margin-right: 0.2rem; }
        }
      }
    }
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>My Personal Website</h2>
      </Header>
      <Section css={sectionStyle}>
        <div className="block">
          <h2>About This Project</h2>
          <p>I have wanted my own website for a long time yet I had repeatedly encountered personal roadblocks that prevented me from deploying an iteration that I felt was <i>ready</i>.  It took me realizing that like any other creative art form, you can never reach perfection - only your perspective closest approximation.</p>
          <p>In particular, the amount of content required to make a website substantial was a daunting task let alone achieving a design and functionality that fulfilled my desires while being unique enough to call my own.</p>
          <p>I was finally able to come to terms with the fact that I just need to create <i>something</i>, put it out there, and <i>then</i> I can slowly improve upon it.  My website will always have something that can be improved but what is important is that it is achieving its purpose.  While I will always continue iterating upon it to optimize this achivement, I feel that I've created a site that fulfills its minimum purpose and am happy that I can finally release it for all to see.</p>
        </div>
        <div className="block">
          <h2>How it's made?</h2>
          <p>My website used create-react-app to kickstart the development process.  Subsequently, after looking through other websites for inspiration, I decided to create my own version of <a href="https://themes.3rdwavemedia.com/devcard/bs4/">this template</a>.</p>
          <p>At first I used scss for styling but as I wanted to implement theming and was steering my design philosophy towards material design, I decided to migrate toward a CSS in JS approach - resulting in my decision to use <a href="https://emotion.sh/">emotion</a> for my styling needs.</p>
          <p>The pages that I've decided to include on my website are:</p>
          <ul>
            <li><b>About</b> - Meant to provide a quick overview for first time visitors and to be a quick-link hub for repeat visitors.  This is the Landing/Home Page of my website.</li>
            <li><b>Resume</b> - Provides an expanded view of my resume as well as a means of downloading the pdf version.  I plan to add the ability to download it in other formats.</li>
            <li><b>Portfolio</b> - A gallery of my projects.  I tried using <a href="https://www.notion.so/">Notion</a> as the CMS for my project through an unofficial API (<a href="https://github.com/splitbee/react-notion">react-notion</a>) but I was left far too wanting.  I am currently constructing my own CMS and in the meantime I am manually crafting each page on this site.</li>
          </ul>
        </div>
      </Section>
      <Section css={sectionStyle}>
        <div>
          <h2>Roadmap</h2>
          <div className="row">
            <div>
              <h3>Content</h3>
              <ul>
                <li><b>Art</b> - A gallery of art that I've made.</li>
                <li><b>Games</b> - A gallery of games that I've made.</li>
                <li><b>Link Library</b> - A gallery of links to resources that I find valuable and want to spread awareness for.</li>
                <li><b>Learning</b> - A gallery of articles that I've written focused on guides and tutorials.  I am heavily considering using DEV as the CMS for these articles.  This would allow my articles to be accessed both on my website and on a more relevant platform for exposure.</li>
              </ul>
            </div>

            <div>
              <h3>Functionality</h3>
              <ul>
                <li><b>Color Manager</b> - My own color management package.
                  <ul>
                    <li><b>Text Contrast</b> - My own method of translating desired contrast to the proper text opacity on a background.</li>
                  </ul>
                </li>
                <li><b>CMS</b> - Find my ideal content management system or create it myself.
                  <ul>
                    <li><b>Page Builder</b> - A method to edit pages on my website live and reactively.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div css={css`text-align: right;`}>
          Last Updated: 2020-09-13
        </div>
      </Section>
    </Main>
  );
}

export default {
  name: 'My Personal Website',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/portfolio/my-personal-website',
    exact: true,
    component: MyPersonalWebsite
  }
};