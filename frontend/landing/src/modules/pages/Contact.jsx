/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Link } from "react-router-dom";
import ReactContactForm from 'react-mail-form';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';

// Import helpers
import { elevate, mq, color } from 'helpers';
import { useState } from 'react';

const Contact = (props) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const style = css`
    height: 100%;
  `;

  const onNameChange = (event) => {
    setInfo({...info, name: event.target.value});
  }

  const onEmailChange = (event) => {
    setInfo({...info, email: event.target.value});
  }

  const onMessageChange = (event) => {
    setInfo({...info, message: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info);
  }

  const formStyle = css`
    margin: auto;
    max-width: 720px;
    min-height: 100vh;
    font-size: 14px;
    text-align: center;
    input,
    textarea {
      display: block;
      margin: 12px auto;
      width: 100%;
      max-width: 480px;
      border: 1px solid #555;
      outline: 0;
      font-size: 16px;
    }
    input {
      padding: 12px 6px;
    }
    textarea{
      padding: 6px;
    }
    a {
      display: block;
      margin: auto;
      width: 120px;
      height: 3em;
      line-height: 3em;
      color: #fff;
      background-color: #3B9CFF;
      font-size: 16px;
      font-weight: 900;
      text-decoration: blink;
      &:visited,
      &:hover,
      &:focus,
      &:active {
        color: #fff;
      }
      &:hover {
        opacity: .7;
      }
    }
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2>Contact</h2>
      </Header>
      <Section>
        <ReactContactForm to="jwmcgettigan@gmail.com" css={formStyle}/>
      </Section>
    </Main>
  );
}

export default {
  name: 'Contact',
  icon: 'FaEnvelopeOpenText',
  routeProps: {
    path: '/contact',
    exact: true,
    component: Contact
  }
};