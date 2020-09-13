import { bp, mq } from './mediaQueries';
import { elevate } from './elevation';
import { color } from './color';

const exists = (any) => any != null;

const googleFileURL = (fileID) => {
  return `https://drive.google.com/uc?export=view&id=${fileID}`
}

const downloadFile = (path) => {
  /*
  const pdf = require('../../assets/resume.pdf')
  fetch(pdf).then(response => {
    response.blob().then(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Resume-Justin-McGettigan.pdf';
      link.click();
    })
  })*/
}

export {
  bp, mq,
  elevate,
  exists,
  color,
  googleFileURL
}