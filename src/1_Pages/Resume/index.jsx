/** @jsx jsx */
import { css, jsx } from '@emotion/core';
//import Select from 'react-select';

import ResumeDoc from './ResumeDoc';
import ResumeDoc2 from './ResumeDoc2';
import { Section, TitleSection, Button, LinkContent } from '../../2_Components';
import { mq, zDepth } from '../../4_Utilities';
import Courses from './Courses';
import { useState } from 'react';

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

const ResumeDownload2 = ({ className }) => {
  return (
    <Button onclick={downloadResume} className={className}>
      <LinkContent icon={'FaFilePdf'} text={'Download'}/>
    </Button>
  )
}

const ResumeOptions = ({ currentValues, setCurrentValues, className }) => {
  const resumeOptionsStyle = css(`
    display: grid;
    justify-content: center;
    align-content: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 1.2;
      text-align: center;
    }

    .select-menus {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 1rem;
    }

    .download {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div > div {
      display: grid;
      border: 1px solid black;
      border-radius: 3px;
      padding: 0.5rem;
      background: lightblue;

      select {
        padding: 0.25rem;
        font-weight: bold;
      }
    }
  `)

  const selectMenuStyle = css(`
    width: 5rem;
    color: red;
  `)

  /* const [currentValues, setCurrentValues] = useState({
    role: "general",
    focus: "general",
    view: "basic",
    download: "pdf"
  }); */

  const options = {
    role: [
      { value: "general", label: "General", focus: [
        { value: "general", label: "General" }
      ]},
      { value: "software_engineer", label: "Software Engineer", focus: [
        { value: "general", label: "General" },
        { value: "front_end", label: "Front End" },
        { value: "back_end", label: "Back End" },
      ]},
      { value: "it_admin", label: "IT Admin", focus: [
        { value: "general", label: "General" },
        { value: "network_admin", label: "Network Admin" },
        { value: "database_admin", label: "Database Admin" },
        { value: "web_admin", label: "Web Admin" }
      ]},
    ],
    view: [
      { value: "basic", label: "Basic" },
      { value: "pretty", label: "Pretty" },
      { value: "skeleton", label: "Skeleton" },
    ],
    file: [
      { value: "pdf", label: "PDF" },
      { value: "docx", label: "DOCX" },
      { value: "txt", label: "TXT" },
    ]
  }

  const handleChange = (value, name) => {
    //https://stackoverflow.com/a/61242889/11342791
    console.log(value)
    setCurrentValues(currentValues => ({
      ...currentValues,
      [name]: value
    }))
  }

  const SelectMenu = ({ type, options, className }) => {
    return (
      <div className={className}>
        <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
        <select id={type} onChange={e => handleChange(e.target.value, type)}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    )
  }

  const currentFocusOptions = options.role.filter(role => role.value === currentValues.role)[0].focus;

  return (
    <TitleSection css={resumeOptionsStyle}>
      <h2>Resume</h2>
      <div className="select-menus">
        <SelectMenu type={"role"} options={options.role}/>
        <SelectMenu type={"focus"} options={currentFocusOptions}/>
        <SelectMenu type={"view"} options={options.view}/>
        <SelectMenu type={"file"} options={options.file}/>
        {/* <div className="download">
          <h3>Download</h3>
        </div> */}
        <ResumeDownload2 css={css`white-space: nowrap;display: flex;justify-content: center;`}/>
      </div>
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

  const [currentValues, setCurrentValues] = useState({
    role: "general",
    focus: "general",
    view: "basic",
    download: "pdf"
  });

  const resumeDocStyle1 = css(`
    display: grid;
    //padding: 2rem;
    ${zDepth(24)};
    margin: 3rem auto;
  `)

  return (
    <main className={className}>
      {/* <ResumeDownload/> */}
      <ResumeOptions currentValues={currentValues} setCurrentValues={setCurrentValues}/>
      <Section css={css`max-width: 100% !important; padding: 0 !important;`}>
        {/* <ResumeDoc css={resumeDocStyle}/> */}
        { currentValues.view === 'basic' ? <ResumeDoc2 css={resumeDocStyle1}/> : <ResumeDoc css={resumeDocStyle1}/>}
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