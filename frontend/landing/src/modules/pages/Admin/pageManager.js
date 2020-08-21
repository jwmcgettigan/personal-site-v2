import pageData from './pageData.json';

const PageManager = () => {
  this.pages = [];
  // Read pages from json file
  // Make changes to pages
  // Write pages to json file

  return {
    read() { // Rename to open()?
      this.pages = JSON.parse(pageData);
    },
    write() { // Rename to close()?

    },
    Page(path, title, body, style) {

      return {
        path: path,
        title: title,
        body: body,
        style: style,
        categories: []
      }
    },
    addPage() {

    },
    editPage() {

    },
    removePage() {

    },
  }
}

const Page = (path, title, body, style) => {


  return {
    path: path,
    title: title,
    body: body,
    style: style
  }
}
