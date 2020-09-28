/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Main from 'modules/common/Main';
import Article from 'modules/common/Article';
import Header from 'modules/common/Header';

import Image from 'modules/common/Image';

const UnderConstruction = (props) => {
  const style = theme => css`
    
  `;

  return (
    <Main css={style} {...props}>
      <Header>
        <h2 css={css`font-size: 1.3em;`}>Page Under Construction</h2>
      </Header>
      <Article>
        <Image css={css`width: 100%; max-width: 20rem;`} src="https://i.gifer.com/7VVO.gif"/>
        <h1>Page Under Construction</h1>
        <p>Sorry about that! I'm currently working on updating this page's content.</p>
        <a onClick={() => props.history.goBack()}>Return to previous page.</a>
      </Article>
    </Main>
  );
}

export default UnderConstruction;