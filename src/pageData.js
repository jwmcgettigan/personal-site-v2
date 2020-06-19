/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React, { useState, useEffect } from 'react';
import Projects from './Pages/Projects';
import Article from './Pages/Article';
import { NotionRenderer } from "react-notion";
import NotionPage from './Components/NotionPage';

const fetchPage = async (PAGE_ID) => {
  return await fetch(`https://notion-api.splitbee.io/v1/page/${PAGE_ID}`, {mode: 'cors'})
  .then(res => (res.ok ? res : Promise.reject(res)))
  .then(res => res.json())
}

const fetchTable = async (TABLE_ID) => {
  return await fetch(`https://notion-api.splitbee.io/v1/table/${TABLE_ID}`, {mode: 'cors'})
  .then(res => (res.ok ? res : Promise.reject(res)))
  .then(res => res.json())
}

const getTablePages = async (table) => {
  const pages = [];

  for(let article in table) {
    const articleName = table[article].Name;
    const articleID = table[article].id;
    const blockMap = await fetchPage(articleID);
    
    if(blockMap != null) {
      let articleImage = null;
      if (blockMap[articleID].value.format != null
        && blockMap[articleID].value.format.page_cover != null) {
        articleImage = 'https://www.notion.so' + blockMap[articleID].value.format.page_cover;
      }
      pages.push({
        name: articleName,
        id: articleID,
        image: articleImage,
        blockMap: blockMap,
        path: '/' + articleName.replace(/ /g, '-').toLowerCase()
      });
    }
  }
  return pages;
}

const fetchTables = async (blockMap) => {
  const formattedTables = []
  if(blockMap != null) {
    const tables = Object.values(blockMap).filter(block => block.value.type === "collection_view")
    
    for(let table in tables) {
      const tableID = tables[table].value.id;
      table = await fetchTable(tableID);
      
      if(table != null) {
        const tableName = table[0].Name;
        delete table[0];
        const pages = await getTablePages(table);

        formattedTables.push({
          name: tableName,
          id: tableID,
          pages: pages
        })
      }
    }
    return formattedTables;
  }
}

//! I should have it only render a page on a need-to-render-basis (if a user clicks on that page)
const renderPages = (subpages) => {
  const pages = []
  subpages.map((subpage, i) => {
    let renderedPage = <NotionRenderer fullPage blockMap={subpage.blockMap}/>;
    //let component = <NotionPage renderedPage={component}/>;
    pages.push({
      name: subpage.name,
      component: NotionPage,
      renderedPage: renderedPage,
      path: '/' + subpage.name.replace(/ /g, '-').toLowerCase()
    })
  })
  return pages;
}

const fetchPages = async (tables) => {
  const pages = [];
  const projects = Object.values(tables).filter(table => table.name === "Projects")[0].pages;
  pages.push({
    name: 'Projects',
    icon: 'FaLaptopCode',
    component: Projects,
    path: '/projects',
    subpath: '/project',
    subpages: renderPages(projects),
    subpageData: projects
  })
  
  const articles = Object.values(tables).filter(table => table.name === "Articles")[0].pages;
  pages.push({
    name: 'Articles',
    icon: 'FaBook',
    component: Article,
    path: '/articles',
    subpath: '/article',
    subpages: renderPages(articles)
  })
  return pages;
}


export const fetchFromNotion = async (CMS_PAGE_ID='2b1541f09b37490cb283993c73e1fde9') => {
  const cmsPage = await fetchPage(CMS_PAGE_ID);
  if(cmsPage != null) {
    const tables = await fetchTables(cmsPage);
    if(tables != null) {
      return await fetchPages(tables);
    }
  }
}