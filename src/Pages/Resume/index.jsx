import React from 'react';
import ResumeDoc from './ResumeDoc';

import { Button } from '../../Components/Link';
import './Resume.scss';
import { Paper } from '@material-ui/core';


const downloadResume = () => {
  const pdf = require('../../assets/resume.pdf')
  fetch(pdf).then(response => {
    response.blob().then(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Resume-Justin-McGettigan.pdf';
      link.click();
    })
  })
}

const ResumeDownload = () => (
  <Paper elevation={2} className="resume-download title-section">
    <h2>Resume</h2>
    <Button icon={'FaFilePdf'} text={'Download PDF Version'} onclick={downloadResume}/>
  </Paper>
)

const Resume = () => (<>
  <main id="resume-page">
    <ResumeDownload/>
    <ResumeDoc/>
  </main>
</>);

export default Resume;

//const API_URL = 'http://localhost:3000';

/*
const printPDF = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/resumeprint", {
    waitUntil: "networkidle0"
  });

  await page.pdf({
    path: "resume.pdf",
    format: "Letter",
    printBackground: true
  });

  await browser.close();
}

const getPDF = () => {
  return axios.get(`${API_URL}/printresume`, {
    reponseType: 'arraybuffer',
    headers: {
      'Accept': 'application/pdf'
    }
  })
}

const savePDF = () => {
  return getPDF()
    .then((response) => {
      const blob = new Blob([response.data], {type: 'application/pdf'});
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Resume-Justin-McGettigan.pdf';
      link.click();
    }).catch(err => console.log(err));
}*/