/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState, useEffect, useMemo } from 'react';
import parse from 'html-react-parser';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';
import PageEditor from './PageEditor';
import PageTable from './PageTable';

// Import helpers
import { elevate, mq, color } from 'helpers';

// API
import api from './api';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState => setState(
    prevState => Object.assign({}, prevState, newState)
  );
  return [state, setMergedState];
};

const Admin = (props) => {
  const [{ pages, isLoading }, setRequest] = useMergeState({
    pages: [],
    isLoading: false
  });
  const [selectedPage, setSelectedPage] = useState(null);
  
  useEffect(() => {
    (async () => {
      setRequest({ isLoading: true });
      try {
        await api.getAllPages().then(pages => {
          setRequest({
            pages: pages.data.data,
            isLoading: false
          });
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  let loadPageData = true;
  //pages.length > 0 && console.log(pages);
  if (!pages.length) {
    loadPageData = false;
  }

  const style = css`
    display: flex;
  `;

  const sectionStyle1 = theme => css`
    display: grid;
    height: 100%;
    grid-template-rows: min-content auto;
    //align-content: flex-start;
    padding: 1rem !important;
    gap: 1rem;
    margin-right: 0;
    //background: lightgrey;

    .buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
    }

    button {
      font-size: 1.1rem;
      font-weight: 800;
      padding: 0.25rem .5rem;
    }

    .parsedpage {
      border: 1px solid grey;
      height: 100%;
      padding: 2rem;
      background: ${theme.background};
    }
  `;

  const parsePage = (page, props={}) => {
    return () => (
      <div css={theme => css`${page.style}`} {...props}>
        {parse(page.body)}
      </div>
    );
  };

  const testPage = {
    "path": "test-page",
    "title": "Test Page",
    "body": "<h1>Test Page</h1>",
    "style": "h1 { color: red; }",
    "categories": [],
    "tags": []
  };

  //(pages[0] != null) && console.log(pages[0])

  /* const ParsedPage = parsePage(selectedPage); */

  //const ParsedPage = () => (pages[0] != null) ? parsePage(pages[0]) : '';
  //const ParsedPage = parsePage(testPage);
  //const ParsedPage = () => parse(testPage.body);
  //const ParsedPage = () => React.createElement('div', null, testPage.body);

  const pageExists = selectedPage == null;
  let ParsedPage = () => <div/>
  if(!pageExists) {
    ParsedPage = parsePage(selectedPage);
  }

  return (
    <Main css={style} {...props}>
      <Section css={sectionStyle1}>
        { loadPageData &&
          <PageTable
            data={pages}
            setSelectedPage={setSelectedPage}/>
        }
        <div className="parsedpage">
          { <ParsedPage/> }
        </div>
      </Section>
      { pageExists ? '' :
        <PageEditor page={selectedPage} setPage={setSelectedPage}/>
      }
    </Main>
  );
};

export default {
  name: 'Admin',
  icon: 'FaKey',
  routeProps: {
    path: '/admin',
    exact: true,
    component: Admin
  }
};