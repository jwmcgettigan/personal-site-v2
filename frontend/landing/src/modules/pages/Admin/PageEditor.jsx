/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
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

const SavePage = props => {
  const _save = event => {
    event.preventDefault();
    
  };
  
  return <button onClick={_save}>Save</button>;
};

const DeletePage = props => {
  const _delete = event => {
    event.preventDefault();

    const confirmation = window.confirm(
      `Do you want to delete the page ${props.id} permanently?`
    );

    if (confirmation) {
      api.deletePageById(props.id);
      window.location.reload();
    }
  };
  
  return <button onClick={_delete}>Delete</button>;
};


const TabularEditor = ({}) => {

};


const PageEditor = ({ page, ...props }) => {
  console.log(page);
  const [tab, setTab] = useState(0);

  const style = css`
    margin-left: 0;
    padding: 1rem !important;
  `;

  const formStyle = css`
    display: grid;
    gap: 1rem;
    height: 100%;
    //align-content: flex-start;
    grid-template-rows: min-content auto;

    .textinputs {
      display: grid;
      gap: 1rem;
      height: 100%;
      grid-auto-flow: row;
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
        background: grey;
        color: white;
        border: 1px solid black;
      }
    }

    .smallinputs {
      display: grid;
      grid-auto-flow: column;
    }

    .buttons {
      display: grid;
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
    }
  `;

  const getCurrentTab = () => {
    switch(tab) {
      case 0:
        return <CodeMirror
          value={beautify.html(page.body, {indent_size: 2})}
          options={{
            theme: 'monokai',
            tabSize: 2,
            mode: 'xml'
          }}
        />;
        break;
      case 1:
        return <CodeMirror
          value={beautify.css(page.style, {indent_size: 2})}
          options={{
            theme: 'monokai',
            tabSize: 2,
            mode: 'css',
          }}
        />;
      default:
        return '';
    }
  };
    

  return (
    <Section css={style} {...props}>
      { page == null ? '' : 

        <form css={formStyle}>
          <div className="smallinputs">
            <div className="textinputs">
              <label css={css``}>
                <span>Path name: </span>
                <input type="text" name="path" value={page.path}/>
              </label>

              <label css={css``}>
                <span>Title: </span>
                <input type="text" name="title" value={page.title}/>
              </label>
            </div>
            <div className="buttons">
              <button css={css`background:lightgreen;`}>Save</button>
              <button css={css`background:red;`}>Delete</button>
            </div>
          </div>

          <label css={css`grid-template-rows: min-content auto;`}>
            <div className="tabs">
              <h3 onClick={() => setTab(0)}>Body</h3>
              <h3 onClick={() => setTab(1)}>Style</h3>
            </div>
            { getCurrentTab() }
          </label>

          {/* <input type="submit" value="Save" />
          <input type="submit" value="Delete" /> */}
        </form>
      }
    </Section>
  );
}

export default PageEditor;