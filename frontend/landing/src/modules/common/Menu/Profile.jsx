/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Import helpers
import { elevate, mq, color } from 'helpers';

//import profilePic from 'assets/head-shot-placeholder.jpg';
import profilePic from 'assets/body-shot-256x256.png';

const data = {
  name: 'Justin McGettigan',
  desc: 'I am a software engineer with a passion for virtual reality and autonomous systems.',
  status: 'Job Searching',
  image: profilePic
}

const Profile = (props) => {
  //TODO: Look into doing an animated '...' to <code> and consider adding colors.
  const style = theme => css`
    //font-family: Rubik, sans-serif;
    display: grid;
    align-content: flex-start;
    gap: 1rem;
    height: max-content;
    ${mq('tablet-wide')} {
      gap: 2rem;
    }

    img {
      position: relative;
      width: 5rem;
      border-radius: 50%;
      border: 3px solid rgba(31, 35, 38, 1.0);
      box-shadow: 0 0 0 3px rgba(59, 54, 47, 1.0);
    }

    p {
      font-style: italic;
      opacity: 0.6;
    }

    code {
      background: ${theme.primary.dark};
      padding: 0.25rem;
      padding-right: 0.5rem;
      line-height: 1rem;
      
      &:after {
        content: '';
        position: relative;
        left: 3px;
        bottom: -3px;
        width: 2px;
        height: 1rem;
        background: white;
        opacity: 0;
        display: inline-block;
        animation: blink 0.6s cubic-bezier(1,0,0,1) infinite alternate;
      }
      
      @keyframes blink {
        from { opacity: 1.0; } to { opacity: 0.0; }
      }
    }
  `;

  return (
    <div css={style} {...props}>
      <img src={data.image} alt={'ProfilePic'}/>
      <h3>{data.name}</h3>
      <p>{data.desc}</p>
      <code><b>Status: </b>{data.status}</code>
    </div>
  )
}

export default Profile;