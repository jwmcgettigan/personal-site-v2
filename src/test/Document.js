import { renderToString } from 'react-dom/server';
import Document from '../Components/Document/Document';
import Style from '../scss/style.scss'

const Renderer = require('@pdftron/web-to-pdf');
const r = new Renderer({ dirname: __dirname });

const DocString = renderToString(<Document/>)

r.render({
  templateSource: DocString,
  styles: [
    Style
  ],
  outputName: 'resume-example'
})