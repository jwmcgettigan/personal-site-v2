/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useEffect, useReducer } from 'react';

import { Projects } from '../1_Pages';
//import post from './Pages/post';
import { NotionRenderer } from "react-notion";
import { NotionPage } from '../2_Components';
import { clone } from '../4_Utilities';
import { typeOf } from 'react-responsive';

const exists = (value) => value != null;

class Page {
  constructor (page) {
    this.name = page.name;
    this.id = page.id;
    this.image = null;
    this.component = NotionPage;
    this.icon = page.icon;
    this.status = page.status;
    this.links = page.links;
    this.path = page.path;
    this.blockMap = page.blockMap;
  }

  render () {
    return <NotionRenderer fullPage blockMap={this.blockMap}/>;
  };
}

class Table {
  constructor (table) {
    this.name = table.name;
    this.id = table.id;
    this.pages = table.pages;
    this.data = table.data;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return { ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return { ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

export const useNotionAPI = (CMS_PAGE_ID='2b1541f09b37490cb283993c73e1fde9') => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    data: {
      dynamicPages: [],
      projectPages: []
    }
  })

  useEffect(() => {
    (async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const fetchedPages = await fetchAll();
        const projectPages = await fetchedPages.filter(page => page.name === "Projects")[0].subpages;
        dispatch({ type: 'FETCH_SUCCESS', payload: { 
          dynamicPages: fetchedPages, projectPages: await projectPages
        }});
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
        console.log(error);
      }
    })()
  }, [])

  const fetchPage = async (PAGE_ID) => {
    const blockMap = await fetch(`https://notion-api.splitbee.io/v1/page/${PAGE_ID}`, {mode: 'cors'})
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    return new Page({
      id: PAGE_ID,
      blockMap: blockMap
    })
  };

  const fetchTable = async (TABLE_ID) => {
    const tableData = await fetch(`https://notion-api.splitbee.io/v1/table/${TABLE_ID}`, {mode: 'cors'})
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    const tableName = tableData[0].Name
    delete tableData[0]
    return new Table({
      name: tableName,
      id: TABLE_ID,
      data: tableData
    })
  };

  const fetchTablesFromPage = async (page) => {
    const formattedTables = []
    const tables = await Object.values(page.blockMap).filter(block => block.value.type === "collection_view")
    await Promise.all(tables.map(async inlineTable => {
      let table = await fetchTable(inlineTable.value.id);
      table.pages = await fetchPagesFromTable(table);
      formattedTables.push(table)
    }))
    return formattedTables;
  };

  const fetchPagesFromTable = async (table) => {
    const pages = [];
    await Promise.all(table.data.map(async post => {
      const page = await fetchPage(post.id);
      if ((window.location.hostname === 'jwmcgettigan.com' && post.Publish) || window.location.hostname !== 'jwmcgettigan.com') {
        page.name = post.Name;
        page.icon = post.Icon;
        page.status = post.Status;
        page.links = post.Links;
        page.path = '/' + page.name.replace(/ /g, '-').toLowerCase();
        
        //let postImage = page.blockMap[page.id].value.format.page_cover;
        let postImageExists = exists(page.blockMap[page.id].value.format) && exists(page.blockMap[page.id].value.format.page_cover);
        if (postImageExists) {
          let postImage = page.blockMap[page.id].value.format.page_cover;
          page.image = (postImage.includes('https://') 
          ? postImage : 'https://www.notion.so' + postImage);
        } else {
        }
        pages.push(page);
      }
    }))
    return pages;
  };

  const formatPages = async (tables) => {
    const pages = [];
    const projectPages = await tables.filter(table => table.name === "Projects")[0].pages;
    pages.push({
      name: 'Projects',
      subpath: '/project',
      subpages: await projectPages,
    })
    return pages;
  };

  const fetchAll = async () => {
    const cmsPage = await fetchPage(CMS_PAGE_ID);
    const tables = await fetchTablesFromPage(cmsPage);
    return await formatPages(tables);
  };

  return state;
}

// ============================================================================

/*
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

  for(let post in table) {
    const postName = table[post].Name;
    const postID = table[post].id;
    const blockMap = await fetchPage(postID);
    
    if(exists(blockMap)) {
      let postImage = null;
      if (exists(blockMap[postID].value.format)
        && exists(blockMap[postID].value.format.page_cover)) {
        if (blockMap[postID].value.format.page_cover.includes('https://')) {
          postImage = blockMap[postID].value.format.page_cover;
        } else {
          postImage = 'https://www.notion.so' + blockMap[postID].value.format.page_cover;
        }
      }
      pages.push({
        name: postName,
        id: postID,
        image: postImage,
        blockMap: blockMap,
        path: '/' + postName.replace(/ /g, '-').toLowerCase()
      });
    }
  }
  return pages;
}

const fetchTables = async (blockMap) => {
  const formattedTables = []
  if(exists(blockMap)) {
    const tables = Object.values(blockMap).filter(block => block.value.type === "collection_view")
    
    for(let table in tables) {
      const tableID = tables[table].value.id;
      table = await fetchTable(tableID);
      
      if(exists(table)) {
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
  
  const posts = Object.values(tables).filter(table => table.name === "posts")[0].pages;
  // pages.push({
  //   name: 'posts',
  //   icon: 'FaBook',
  //   component: post,
  //   path: '/posts',
  //   subpath: '/post',
  //   subpages: renderPages(posts)
  // })
  return pages;
}


export const fetchFromNotion = async (CMS_PAGE_ID='2b1541f09b37490cb283993c73e1fde9') => {
  const cmsPage = await fetchPage(CMS_PAGE_ID);
  if(exists(cmsPage)) {
    const tables = await fetchTables(cmsPage);
    if(exists(tables)) {
      return await fetchPages(tables);
    }
  }
}*/