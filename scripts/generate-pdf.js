//import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/printresume", {
    waitUntil: "networkidle2"
  });

  await page.pdf({
    path: "resume.pdf",
    format: "Letter",
    printBackground: true
  });

  await browser.close();
})();


/*
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/resumeprint", {
    waitUntil: "networkidle0"
  });

  const pdf = await page.pdf({
    format: "Letter",
    printBackground: true
  });

  await browser.close();
  return pdf;
}

printPDF.then(pdf => {
  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
  res.send(pdf)
})*/