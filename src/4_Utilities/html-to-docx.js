//import htmlDocx from 'html-docx-js';
//import htmlDocx from 'html-docx-js';
//import 'html-docx-js';
const fetch = require('node-fetch');

const url = 'http://localhost:3000/resume/print2';

//const html = await fetch(url);
/* const html = fetch('http://localhost:3000/resume/print2')
.then(response => response.text()) */

async function getHtmlString(url) {
  let response = await fetch(url);
  return await response.text();
}


setInterval(() => console.log(getHtmlString(url)), 1000)

//var converted = htmlDocx.asBlob(content);
//saveAs(converted, 'test.docx');