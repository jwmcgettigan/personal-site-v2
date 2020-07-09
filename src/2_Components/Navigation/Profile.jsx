/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react";
import SocialLinks from './SocialLinks';
//import ProfilePicture from '../../assets/head-shot-placeholder.jpg';
//import ProfilePicture from '../../assets/ProfilePic/EditedHeadshot1.2.png';
import ProfilePicture from '../../assets/ProfilePic/ProfilePic2.6.jpg';
import { Image } from '../../2_Components';
import { mq } from '../../4_Utilities';

const Profile = ({ isTabletOrMobile, className}) => {

  const profileStyle = css(`
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(3, min-content);
    justify-content: center;

    ${mq('tablet-wide')} {
      width: 200px;
      justify-self: center;
    }

    h1 {
      display: grid;
      width: 100%;
      grid-template-rows: min-content;
      grid-template-columns: min-content 1fr;
      grid-gap: 0.5rem;
      align-items: center;

      ${mq('tablet-wide')} {
        grid-template-rows: repeat(2, min-content);
        grid-template-columns: 1fr;
        justify-content: center;
        text-align: center;
      }
    }

    img {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      //border: 2px solid color(background, base, 0.5);
      ${mq('tablet-wide')} {
        width: 200px;
        height: 200px;
        justify-self: center;
      }
    }

    p {
      display: block;
      font-size: 0.875rem;
      text-align: center;
    }
  `)

  return (
    <section css={profileStyle} className={className}>
      <h1>
        <Image css={css`img { object-position: center; }`} image={ProfilePicture} alt={"Profile"}/>
        <a href="/">Justin McGettigan</a>
      </h1>
      <p>Artist | Developer | Engineer</p>
      <SocialLinks/>
    </section>
  )
}

export default Profile;