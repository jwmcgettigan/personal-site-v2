/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react';
import ResumeDoc from './ResumeDoc';

import { Button, Content } from '../../Components/Link';
import { TitleSection } from '../../Components/Section';
import { useTheme } from '@material-ui/core/styles';
import { mq, zDepth } from '../../helper';

//import './Resume.scss';


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


const ResumeDownload = () => {
  const theme = useTheme();
  const resumeDownloadStyle = css(`
    display: grid;
    justify-content: center;
    align-content: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 1.2;
      text-align: center;
    }
  `)

  return (
    <TitleSection css={resumeDownloadStyle}>
      <h2>Resume</h2>
      <Button onclick={downloadResume}>
        <Content icon={'FaFilePdf'} text={'Download PDF Version'}/>
      </Button>
    </TitleSection>
  )
}

const Resume = ({ className }) => {
  return (
    <main className={className}>
      <ResumeDownload/>
      <ResumeDoc/>
    </main>
  )
};

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