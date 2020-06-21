/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ResumeDoc from './ResumeDoc';
import { Section, TitleSection, Button, LinkContent } from '../../2_Components';
import { mq, zDepth } from '../../4_Utilities';


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

    ${mq('tablet-wide')} {
      transform: scale(0.9);
      zoom: 0.9;
    }
    ${mq('desktop')} {
      transform: scale(1.1);
    }
    ${mq('desktop-wide')} {
      transform: scale(1.3);
    }
  `)

  return (
    <main className={className}>
      <ResumeDownload/>
      <Section>
        <ResumeDoc/>
      </Section>
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