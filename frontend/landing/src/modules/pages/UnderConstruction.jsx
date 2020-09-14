/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import Header from 'modules/common/Header';

import Image from 'modules/common/Image';

const UnderConstruction = (props) => {
  const style = theme => css`
    a {
      color: ${theme.primary.A700};

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.primary.A700};
        cursor: pointer;
      }
    }
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2 css={css`font-size: 1.3em;`}>Page Under Construction</h2>
      </Header>
      <Section>
        <Image css={css`width: 100%; max-width: 20rem;`} src="https://i.gifer.com/7VVO.gif"/>
        <h1>Page Under Construction</h1>
        <p>Sorry about that! I'm currently working on updating this page's content.</p>
        <a onClick={() => props.history.goBack()}>Return to previous page.</a>
      </Section>
    </Main>
  );
}

export default UnderConstruction;