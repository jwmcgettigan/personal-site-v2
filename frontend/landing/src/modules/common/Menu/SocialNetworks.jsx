/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import components
import Link from 'modules/common/Link';
import Icon from 'modules/common/Icon';

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

const SocialNetworks = ({ ...props }) => {
  const style = theme => css`
    height: max-content;
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    padding-top: 1rem;
    border-top: 1px solid ${color(theme.primary.main).getContrastText(1.2).toString()};

    a {
      display: flex;
      align-items: center;
    }
    
    svg {
      font-size: 2rem;
    }
  `;

  return (
    <div css={style} {...props}>
      {socialNetworks.map(sn => (
        <Link href={sn.url} title={sn.name} key={sn.name} newtab>
          <Icon icon={sn.icon}/>
        </Link>
      ))}
    </div>
  );
}

export default SocialNetworks;