/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';

import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/xml-hint";
import "codemirror/addon/hint/css-hint";

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import beautify from 'js-beautify';

// Import components
import Main from 'modules/common/Main';
import Section from 'modules/common/Section';


// Import helpers
import { elevate, mq, color } from 'helpers';

// API
import api from './api';
import { useState } from 'react';

const CreatePage = ({ page, ...rest }) => {
  const create = event => {
    event.preventDefault();
    api.insertPage({
      path: page.path,
      title: page.title,
      body: page.body,
      style: page.style,
      categories: page.categories,
      tags: page.tags
    });
  };
  
  return <button onClick={create} {...rest}>Create</button>;
};

const SavePage = ({ page, ...rest }) => {
  const save = event => {
    event.preventDefault();
    api.updatePageById(page._id, page);
    window.location.reload();
  };
  
  return <button onClick={save} {...rest}>Save</button>;
};

const DeletePage = ({ page, ...rest }) => {
  const remove = event => {
    event.preventDefault();

    const confirmation = window.confirm(
      `Do you want to delete the page ${page._id} permanently?`
    );

    if (confirmation) {
      api.deletePageById(page._id);
      //window.location.reload();
    }
  };
  
  return <button onClick={remove} {...rest}>Delete</button>;
};


const TabularEditor = ({}) => {

};

let prevPage = null;

const PageEditor = ({ page, setPage, ...props }) => {
  let newPage = {...page};
  //console.log(newPage)
  const [selectedTab, setSelectedTab] = useState(0);
  const [text, setText] = useState({
    path: page.path,
    title: page.title
  });

  const style = css`
    margin-left: 0;
    padding: 1rem !important;
  `;

  const formStyle = theme => css`
    display: grid;
    gap: 1rem;
    height: 100%;
    //align-content: flex-start;
    grid-template-rows: min-content auto;

    .textinputs {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      justify-content: left;
      //justify-items: center;
    }

    .tabs {
      display: grid;
      grid-auto-flow: column;
      justify-content: left;
      height: min-content;

      h3 {
        padding: 0.25rem 0.5rem;
        background: ${theme.primary.main};
        color: white;
        border: 1px solid grey;
        border-bottom: none;
        ${elevate(4)};

        &:not(:first-of-type) {
          border-left: none;
        }
      }
    }

    .smallinputs {
      display: grid;
      grid-auto-flow: column;
    }

    .buttons {
      display: grid;
      gap: 1rem;
      grid-auto-flow: column;
      justify-content: flex-end;
      align-content: space-between;
    }
    
    label {
      display: grid;
      //grid-auto-flow: column;
      //grid-template-columns: 0.2fr 1fr;
      white-space: nowrap;
    }

    button {
      padding: 0.25rem 0.5rem;
      font-size: 1.1rem;
      font-weight: 800;
      ${elevate(4)};
    }

    .CodeMirror {
      border: 1px solid grey;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      ${elevate(4)};
    }
  `;

  const renderTabs = () => {
    const tabNames = ["HTML", "CSS"];
    const selectedTabStyle = theme => css`
      border-bottom: 2px solid ${theme.primary.A100} !important;
    `;
    return tabNames.map((tabName, i) => {
      return <h3 key={tabName} onClick={() => setSelectedTab(i)} css={selectedTab == i ? selectedTabStyle : ''}>{tabName}</h3>
    })
  };

  const tabContent = [
    <CodeMirror
      value={beautify.html(newPage.body, {indent_size: 2})}
      options={{
        theme: 'monokai',
        mode: 'xml',
        extraKeys: {
          "Ctrl-Space": "autocomplete"
        }
      }}
      onChange={(instance) => {
        const updatedBody = beautify.html(instance.getValue(), {indent_size: 2});
        newPage.body = updatedBody;
      }}
    />,
    <CodeMirror
      value={beautify.css(newPage.style, {indent_size: 2})}
      options={{
        theme: 'monokai',
        mode: 'css',
        extraKeys: {
          "Ctrl-Space": "autocomplete"
        }
      }}
      onChange={(instance) => {
        const updatedStyle = beautify.css(instance.getValue(), {indent_size: 2});
        newPage.style = updatedStyle;
      }}
    />
  ]

  const CurrentTab = () => tabContent[selectedTab];

  return (
    <Section css={style} {...props}>
      <form css={formStyle}>
        <div className="smallinputs">
          <div className="textinputs">
            <label css={css``}>
              <span>Path name: </span>
              <input type="text" value={text.path}
                onChange={e => {
                  newPage.path = e.target.value;
                  setText({...text, path: e.target.value});
                }}/>
            </label>

            <label css={css``}>
              <span>Title: </span>
              <input type="text" value={text.title}
                onChange={e => {
                  newPage.title = e.target.value;
                  setText({...text, title: e.target.value});
                }}/>
            </label>
          </div>
          <div className="buttons">
            <CreatePage page={newPage} css={css`background:lightblue;`}/>
            <SavePage page={newPage} css={css`background:lightgreen;`}/>
            <DeletePage page={newPage} css={css`background:red;`}/>
          </div>
        </div>

        <label css={css`grid-template-rows: min-content auto;`}>
          <div className="tabs">
            { renderTabs() }
          </div>
          <CurrentTab/>
        </label>
      </form>
    </Section>
  );
}

export default PageEditor;