/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from "react";
import SocialLinks from './SocialLinks';
import ProfilePicture from '../../assets/head-shot-placeholder.jpg';
import { mq } from '../../4_Utilities';

const Profile = ({}) => {

  const profileStyle = css(`
    display: grid;
    grid-gap: 1rem;

    h1 {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    img {
      display: block;
      justify-self: center;
      width: 200px;
      border-radius: 50%;
      //border: 2px solid color(background, base, 0.5);
    }

    p {
      display: block;
      font-size: 0.875rem;
      text-align: center;
    }
  `)

  return (
    <section css={profileStyle}>
      <img src={ProfilePicture} alt="Profile"/>
      <h1><a href="/">Justin McGettigan</a></h1>
      <p>Artist | Developer | Engineer</p>
      <SocialLinks/>
    </section>
  )
}

export default Profile;