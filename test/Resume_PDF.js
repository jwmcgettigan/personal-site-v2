import React from 'react';
import { renderToString } from 'react-dom/server';
import Resume from '../src/Components/Resume/Resume';
import Style from '../scss/style.scss'

const Renderer = require('@pdftron/web-to-pdf');
const r = new Renderer({ dirname: __dirname });

const DocString = renderToString(<Resume/>)

r.render({
  templateSource: DocString,
  styles: [
    Style
  ],
  outputName: 'resume-example'
})