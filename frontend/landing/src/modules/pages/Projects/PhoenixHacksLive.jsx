/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { RepoCard } from 'react-github-cards';
import { CodeBlock, dracula } from 'react-code-blocks';
import beautify from 'js-beautify';
import 'react-github-cards/dist/default.css';


// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Image from 'modules/common/Image';

// Import helpers
import { elevate, mq, color, googleFileURL } from 'helpers';

// Import images
import Timer from 'assets/projects/phoenixhacks-live/PhoenixHacksTimer.png';
import Schedule from 'assets/projects/phoenixhacks-live/PhoenixHacksSchedule.png';
import Announcements from 'assets/projects/phoenixhacks-live/PhoenixHacksAnnouncements.png';
import Diagram from 'assets/projects/phoenixhacks-live/PhoenixHacksDiagram.svg';

const PhoenixHacksLive = (props) => {
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
      display: grid;
      grid-auto-flow: column;
      justify-content: left;
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

    figcaption {
      caret-color: rgb(60, 65, 68);
      color: rgba(60, 65, 68, 0.6);
      padding: 6px 0;
      white-space: pre-wrap;
      word-break: break-word;
      font-size: 14px;
      line-height: 1.4;
    }

    img {
      width: 100%;
      ${mq('tablet')} {
        width: 80%;
      }
      ${mq('tablet-wide')} {
        width: 70%;
      }
      ${mq('desktop')} {
        width: 50%;
      }
    }

    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
      }
    }

    code { font-size: 1rem !important; }

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
        <h2>PhoenixHacks Live</h2>
      </Header>
      <Section css={sectionStyle}>
        <div>
          <div className="block">
            <h2>About This Project</h2>
            <p>PhoenixHacks is an 24-hour <a href="https://en.wikipedia.org/wiki/Hackathon">Hackathon</a> hosted at <a href="https://en.wikipedia.org/wiki/Florida_Polytechnic_University">Florida Polytechnic University</a>.</p>
          </div>
          <RepoCard username="PhoenixHacks" repo="2020-live-web"/>
        </div>
        <div className="block">
          <h2>How it's made.</h2>
          <p>These following features are the requirements we laid out for the live site.</p>
          <ul>
            <li><b>Countdown Timer</b> - A javascript inverval that calculates the remaining time every second.</li>
            <li><b>Announcements</b> - A realtime view of the discord announcements channel accomplished using sockets, the PhoenixHacks API, and a discord bot.</li>
            <li><b>Important Links</b> - (Required Links) Discord Invite & Devpost.</li>
            <li><b>Helpful Resources</b> - (Optional Links) Github Awesomes and helpful resources.</li>
            <li><b>WiFi Information</b></li>
            <li><b>Easy to Follow & Updated Schedule</b> - Conditional rendering combined with event filters.</li>
            <li><b>Maps</b> - A top down view to help hackers find their way around.</li>
            <li><b>A fitting theme and easy to navigate layout</b> - </li>
          </ul>
        </div>
        <div>
          <div className="block">
            <h3>Countdown Timer</h3>
            <div>
              <Image src={Timer}/>
              <figcaption>This feature is essentially this <a href="https://github.com/MangoHacks/mango2019-live/blob/master/src/Components/Header.js">MangoHacks live site timer</a> with modified formatting.</figcaption>
            </div>
          </div>
          <div className="block">
            <h3>Schedule</h3>
            <div>
              <Image src={Schedule}/>
              <figcaption>This feature was made from scratch with design inspiration from <a href="https://github.com/TreeHacks/live-schedule">TreeHacks live site schedule</a>.</figcaption>
            </div>
            <p>All of the event data is stored in an array as javascript objects in an <a href="https://github.com/PhoenixHacks/2020-live-web/blob/master/src/services/events.js">events.js</a> file.</p>
            <p>Here is an example of an event's data:</p>
            <CodeBlock
              text={beautify.js(`{
                "name": "Ice Breaker",
                "date": "2020-01-25",
                "time": {
                  "start": "12:00:00",
                  "end": "13:00:00",
                },
                "tags": ["logistics"],
                "location": "Commons",
                "description": "Meet new people and find a team."
              }`)}
              language={'javascript'}
              showLineNumbers={false}
              wrapLines
            />
            <p>A future goal is to have the events data be accessible through the PhoenixHacks API for better modularity and easier modifications.</p>
          </div>

          <div className="block">
            <h3>Announcements</h3>
            <div>
              <Image src={Announcements}/>
              <figcaption>This feature is a realtime view of the discord announcements channel accomplished using sockets, the PhoenixHacks API, and a discord bot.</figcaption>
            </div>
            <div>
              <Image src={Diagram}/>
              <figcaption>This diagram shows the dataflow of messages from the <b><i>announcements</i></b> channel on the PhoenixHacks Discord server all the way to the user's Announcements component of the web app.</figcaption>
            </div>
            <RepoCard username="PhoenixHacks" repo="2020-api"/>
            <p>The Discord bot (which was promptly named PhoenixBot) was made using <a href="https://discord.js.org/">discord.js</a>.</p>
            <p>The socket management was done using <a href="https://socket.io/">socket.io</a>.</p>
            <p>For the sake of convenience, PhoenixBot and the socket.io socket were hosted on the same server as a heroku app at: <a href="https://phoenixhacks-api.herokuapp.com/">https://phoenixhacks-api.herokuapp.com/</a></p>
            <p>The reason that it was hosted on heroku and not on a service that would allow the use of <a href="http://api.phoenixhacks.com/">api.phoenixhacks.com</a> was because it was the only service that we found at the time that allowed the continuous use of a socket server, for free, without any problems.</p>
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
  name: 'PhoenixHacks Live',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/portfolio/phoenixhacks-live',
    exact: true,
    component: PhoenixHacksLive
  }
};