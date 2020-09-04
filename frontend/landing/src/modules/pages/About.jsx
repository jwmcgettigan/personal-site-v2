/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';

// Import helpers
import { elevate, mq, color } from 'helpers';

const socialNetworks = [
  {
    name: 'LinkedIn',
    icon: 'FaLinkedinIn',
    url: 'https://www.linkedin.com/in/jwmcgettigan/'
  },
  {
    name: 'GitHub',
    icon: 'FaGithubAlt',
    url: 'https://github.com/jwmcgettigan'
  },
  {
    name: 'Stack Overflow',
    icon: 'FaStackOverflow',
    url: 'https://stackoverflow.com/users/11342791/jwmcgettigan'
  },
  {
    name: 'freeCodeCamp',
    icon: 'FaFreeCodeCamp',
    url: 'https://www.freecodecamp.org/jwmcgettigan'
  },
  {
    name: 'DEV Community',
    icon: 'FaDev',
    url: 'https://dev.to/jwmcgettigan'
  },
]

/**
 * Sections:
 * - Introduction
 * - Interests
 * - Dream
 * @param {*} props 
 */
const About = (props) => {
  const style = theme => css`
    height: 100%;

    .hoverbox {
      width: 100px;
      height: 100px;
      background: white;
      margin-top: 2rem;
      margin-bottom: 2rem;
      ${elevate(1)};

      animation: hover 0.5s alternate infinite;
    }

    @keyframes hover {
      0% {
        ${elevate(1)};
      }
      100% {
        ${elevate(24)};
      }
    }

    .testbox {
      width: 50px;
      height: 50px;
      background: grey;
      color: black;

      animation: breath 3s alternate infinite;
    }

    @keyframes breath {
      0% {
        width: 50px;
        height: 50px;
      }
      100% {
        width: 500px;
        height: 500px;
      }
    }

    h4 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }
  `;

  const sectionStyle = theme => css`
    display: grid;
    gap: 1rem;
    height: 100%;
    //font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 1.5rem;

    .row {
      display: grid;
      grid-auto-flow: column;
    }

    h3 {
      font-family: 'Rubik', sans-serif;
      font-weight: 300;
    }

    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
      }
    }

    .resource-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      gap: 1rem;

      .resource-card {
        background: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        ${elevate(2)};
        display: grid;
        justify-items: center;
        //color: ${color(theme.primary.A700).setAlpha(0.85).str};
        //width: 10rem;
        width: max-content;

        h5 {
          //white-space: nowrap;
        }

        svg {
          width: 4rem;
          height: auto;
        }

        &:hover {
          transform: scale(1.01);
          ${elevate(6)};
          color: ${theme.primary.A700};
        }
      }
    }

    .gaming-webnovels {
      display: grid;
      gap: 1rem;
      align-items: flex-start;

      ${mq('phablet')} {
        grid-template-columns: 1fr 1fr;
      }

      & > div {
        display: grid;
        gap: 1rem;
      }
    }
  `;

  const elevatorPitch = `
    Hello there!  I'm a software developer and aspiring software engineer.  My background is that I live in Florida and studied computer science at Florida Polytechnic University.  I have a LOT of interests but my primary ones would have to be web novels, art, game design, software development, augmented reality, autonomous systems, and programming.
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>About</h2>
      </Header>
      <Section css={sectionStyle}>
        <h2>Introduction</h2>
        <p>Hello there! Here's a little bit about myself.  I'm Justin McGettigan and I'm a software developer.  I live in <a href="https://en.wikipedia.org/wiki/Florida">Florida</a> and I studied computer science at <a href="https://en.wikipedia.org/wiki/Florida_Polytechnic_University">Florida Polytechnic University</a>.  My primary interests include programming, mathematics, gaming, and web novels.  I'm particularly passionate about Computer Vision, Autonomous Systems, and Human-Computer Interaction.  You'll be able to see these interests in my projects.</p>
        <p>This website is a passion project of mine that I plan to continuously develop. While I have many plans that I'm still fleshing out, my current intended usages of this site include:</p>
        <ul>
          <li>Supplementing information for prospective employers such as my character, passions, projects, etc.</li>
          <li>Consolidating my knowledge and understanding on many topics for both myself and others.</li>
          <li>Exhibiting my work for its quality, digestibility, and visualizations.</li>
        </ul>

        <h3>Web Presence</h3>
        <div className="resource-cards">
          {socialNetworks.map(sn => (
            <Link href={sn.url}>
              <div className="resource-card">
                <Icon icon={sn.icon}/>
                <h5>{sn.name}</h5>
              </div>
            </Link>
          ))}
        </div>
        {/* Have a section to address prospective employers. */}
        {/* <p>If you're a prospective employer...</p> */}

        {/* <div className="row">

        </div> */}
        {/* <div className="hoverbox"/>
        <div className="testbox"/> */}
      </Section>
      <Section css={sectionStyle}>
        <h2>My Passions</h2>
        <h3>Mathematics and Computer Science</h3>
        <p>My passion for math and computer science have made me into who I am today.  There is indescribable beauty to be found in mathematics and satisfaction in its constant prevalence in the world around us.  This extends to computer science where the functional and algorithmic approach to problem solving allows for solutions to be found or developed for practically any problem - real or digital.  All of this led me into the worlds of programming, software development, and software engineering.</p>
        <div className="gaming-webnovels">
          <div>
            <h3>Gaming</h3>
            <p>I've been playing games since as far back as I can remember. At every opportunity, no matter the platform, if there was a game then I was playing it: board games, consoles, PCs, sports, etc.</p>
            <p>Up until I got a PS2 as my first console, I had played games like Runescape, Civ 3, Stronghold Crusaders, C&C on friends' and parents' computers.  Some memorable games were the Pokemon series on GBA and SW:BF2 on PSP.</p>
            <p>After playing every kind of game my PS2, I moved to Xbox 360 where I mostly played COD, and then finally I got a PC.  I played Minecraft for a good 2 years up until it left beta and then my gaming after that has been pretty exclusively on PC.</p>
          </div>
          <div>
            <h3>Web Novels</h3>
            <p>I used to be a person who wasn't into anime. Then I watched ATLA the summer after middle school and it was my gateway drug into the world of anime. I binged every anime I could find until my junior year when finding anime that fit my tastes started becoming more difficult.</p>
            <p>It was at this time that I started transitioning into the world of manga.  I quickly consumed every manga I could find.  By my senior year I had expanded my search to manhua and manhwa.</p>
            <p>Once I'd exhausted that medium, I transitioned to light novels.  After that, my search into Korean and Chinese novels introduced me to the world of web novels.  With sites like <a href="https://royalroad.com/">RoyalRoad</a> for native english works and sites like <a href="https://wuxiaworld.com/">Wuxiaworld</a> for translated works.</p>
            <p>Nowadays, I've largely exhausted this medium as well though I continue to read whenever I find something I enjoy.</p>
          </div>
        </div>
      </Section>
      <Section css={sectionStyle}>
        <h2>My Dream</h2>
        <p>I dream of a world where there is no distinction between <i>real</i> and <i>virtual</i>.</p>
        <p>A world where we are no longer constrained by the laws of reality - where the laws can be <i>decided by us</i>.</p>
        <p>A world where we have overcome our biological limitations.</p>
        <p>A world with interfaces so seemless that our technology is a natural extension of ourselves.</p>
        <p>A world where we continue to ingeniously pick apart the secrets of the universe.</p>
        <p>It is my hope that such a world will come to be for the benefit of all humanity.</p>
      </Section>
    </Main>
  );
}

export default {
  name: 'About',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/',
    exact: true,
    component: About
  }
};