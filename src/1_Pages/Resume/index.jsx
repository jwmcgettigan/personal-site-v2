/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ResumeDoc from './ResumeDoc';
import { Section, TitleSection, Button, LinkContent } from '../../2_Components';
import { mq, zDepth } from '../../4_Utilities';
import Courses from './Courses';

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
        <LinkContent icon={'FaFilePdf'} text={'Download PDF'}/>
      </Button>
    </TitleSection>
  )
}

const Resume = ({ className }) => {
  const resumeDocStyle = theme => css(`
    ${zDepth(24)};
    margin: 3rem auto;
    transform-origin: top;
    display: block;
    width: 100%;
    height: auto;
    div > div > h4 {
      white-space: normal;
    }

    ${mq('tablet')} {
      display: grid;
      transform: scale(0.9);
      zoom: 0.9;
      div > div > h4 {
        white-space: nowrap;
      }
      margin-bottom: -2rem;
    }
    ${mq('desktop')} {
      transform: scale(1.1);
      margin-bottom: 10rem;
    }
    ${mq('desktop-wide')} {
      transform: scale(1.3);
      margin-bottom: 23rem;
    }
  `)

  return (
    <main className={className}>
      <ResumeDownload/>
      <Section css={css`max-width: 100% !important; padding: 0 !important; z-index: 1;`}>
        <ResumeDoc css={resumeDocStyle}/>
      </Section>
      <Courses/>
    </main>
  )
};

export { ResumeDoc };
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