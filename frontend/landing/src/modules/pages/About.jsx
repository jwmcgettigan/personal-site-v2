//#region Imports

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Article from 'modules/common/Article';
import Header from 'modules/common/Header';
import Icon from 'modules/common/Icon';
import Link from 'modules/common/Link';
import CalloutCard from 'modules/common/CalloutCard';

// Import helpers
import { elevate, mq, color } from 'helpers';

//#endregion

//#region Data

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
];

//#endregion

//Sections:
// - Introduction
// - Interests
// - Dream

/**
 * Page for introducing myself, my website,
 * my interests, and my dreams.
 */
const About = (props) => {

  //#region JSX

  return (
    <Main {...props}>
      <Header>
        <h2>About</h2>
      </Header>
      <Article>
        <Section>
          <div>
            <h2>Introduction</h2>
            <p>Hello there! Here's a little bit about myself.  I'm Justin McGettigan and I'm a software developer.  I live in <a href="https://en.wikipedia.org/wiki/Florida">Florida</a> and I studied computer science at <a href="https://en.wikipedia.org/wiki/Florida_Polytechnic_University">Florida Polytechnic University</a>.  My primary interests include programming, mathematics, gaming, and web novels.  I'm particularly passionate about <a href="https://en.wikipedia.org/wiki/Computer_vision">Computer Vision</a>, <a href="https://en.wikipedia.org/wiki/Autonomous_robot">Autonomous Systems</a>, and <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction">Human-Computer Interaction</a>.  You'll be able to see these interests in my projects.</p>
          </div>
          <p>This website is a passion project of mine that I plan to continuously develop. While I have many plans that I'm still fleshing out, my current intended usages of this site include:</p>
          <ul>
            <li>Supplementing information for prospective employers such as my character, passions, projects, etc.</li>
            <li>Consolidating my knowledge and understanding on many topics for both myself and others.</li>
            <li>Exhibiting my work for its quality, digestibility, and visualizations.</li>
          </ul>
          <CalloutCard>
            <p css={theme => css`color: ${theme.secondary.A700};`}>Note: I am currently working on adding content to the site.  For now, it's pretty bare-bones.</p>
          </CalloutCard>
        </Section>

        <Section>
          <h2>My Passions</h2>
          <Section>
            <h3>Mathematics and Computer Science</h3>
            <p>My passion for math and computer science have made me into who I am today.  There is indescribable beauty to be found in mathematics and satisfaction in its constant prevalence in the world around us.  This extends to computer science where the functional and algorithmic approach to problem solving allows for solutions to be found or developed for practically any problem - real or digital.  All of this led me into the worlds of programming, software development, and software engineering.</p>
          </Section>
          <Section>
            <h3>Gaming</h3>
            <p>I've been playing games since as far back as I can remember. At every opportunity, no matter the platform, if there was a game then I was playing it: board games, consoles, PCs, sports, etc.</p>
            <p>Before having a console, I played games like Runescape, <a href="https://en.wikipedia.org/wiki/Civilization_(series)">Civ 3</a>, <a href="https://en.wikipedia.org/wiki/Stronghold:_Crusader">Stronghold: Crusader</a>, and <a href="https://en.wikipedia.org/wiki/Command_%26_Conquer">C&C</a> on friends' and parents' computers.  Some memorable games were the Pokemon series on a <a href="https://en.wikipedia.org/wiki/Game_Boy_Advance_SP">GBA SP</a> and <a href="https://en.wikipedia.org/wiki/Star_Wars:_Battlefront_II_(2005_video_game)">SW:BF2</a> on <a href="https://en.wikipedia.org/wiki/PlayStation_Portable">PSP</a>.</p>
            <p>After getting a <a href="https://en.wikipedia.org/wiki/PlayStation_2">PS2</a> as my first console and creating many memories with it, I moved to <a href="https://en.wikipedia.org/wiki/Xbox_360">Xbox 360</a> where I mostly played <a href="https://en.wikipedia.org/wiki/Call_of_Duty">CoD: Black Ops</a>, and then finally I got a PC.  I played Minecraft for a good 2 years up until it left beta and then my gaming after that has been pretty exclusively on PC.</p>
          </Section>
          <Section>
            <h3>Web Novels</h3>
            <p>I used to be a person who wasn't into anime. Then I watched <a href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender">ATLA</a> the summer after middle school and it was my gateway drug into the world of anime. I binged every anime I could find until my junior year when finding anime that fit my tastes started becoming more difficult.</p>
            <p>It was at this time that I started transitioning into the world of manga.  I quickly consumed every manga I could find.  By my senior year I had expanded my search to manhua and manhwa.</p>
            <p>Once I'd exhausted that medium, I transitioned to light novels.  After that, my search into Korean and Chinese novels introduced me to the world of web novels.  With sites like <a href="https://royalroad.com/">RoyalRoad</a> for native english works and sites like <a href="https://wuxiaworld.com/">Wuxiaworld</a> for translated works.</p>
            <p>Nowadays, I've largely exhausted this medium as well though I continue to read whenever I find something I enjoy.</p>
          </Section>
        </Section>

        <Section>
          <h2>My Dream</h2>
          <p>I hope that I can contribute to, if not bring to fruition, the bridging between what is considered virtual and real.</p>
          <p>I imagine a world where we are myriad steps ahead of the simple interface that our smartphone functions as today.</p>
          <p>Technologies such as neural interfaces, smart contacts, AI, and bionics (eyes, limbs, etc.) will allow
            us to interact with our reality in ways we've never experienced.  Tasks that currently require multiple steps of interaction
            will be completable with a mere thought (e.g. solving a math problem.)</p>
          <p>Information gathering and processing will be greatly expedited.</p>
          <p>Merely looking at someone will allow us to review their virtual profile in person and in real-time.</p>
          <p>Real-time spatially correct and interactive directions.</p>
          <p>Video calls will become virtual calls w/interactive holograms.</p>
          <p>By augmenting ourselves, we will continue to open new and fascinating possibilities.</p>
          <p>Just thinking about it is thrilling.  The possibilities are limitless.</p>
        </Section>
      </Article>
    </Main>
  );

  //#endregion
  
};

export default {
  name: 'About',
  icon: 'FaUserAlt',
  routeProps: {
    path: '/',
    exact: true,
    component: About
  }
};