/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react";
import SocialLinks from './SocialLinks';
//import ProfilePicture from '../../assets/head-shot-placeholder.jpg';
//import ProfilePicture from '../../assets/ProfilePic/EditedHeadshot1.2.png';
import ProfilePicture from '../../assets/ProfilePic/ProfilePic2.6.jpg';
import { Image, Icon } from '../../2_Components';
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
      font-size: 1.38rem;

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

  const imageStyle = css(`
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
    img {
      object-position: center;
    }
  `)

  const constructionStyle = css(`
    color: orange;
    font-size: 1.25rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      animation: rotation 2s infinite linear;
      margin-right: 0.5rem;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  `)

  return (
    <section css={profileStyle} className={className}>
      <span css={constructionStyle}><Icon icon={"FaCog"}/>Under Construction</span>
      <h1>
        <Image css={imageStyle} image={ProfilePicture} alt={"Profile"}/>
        <a href="/">Justin McGettigan</a>
      </h1>
      <p>Artist | Developer | Engineer</p>
      <SocialLinks/>
    </section>
  )
}

export default Profile;