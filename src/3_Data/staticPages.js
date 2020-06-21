import { About, Projects, Resume, Testing, LinkLibrary, Learning, Games, PageBuilder, ResumeDoc, Error } from '../1_Pages';

//import { About, Projects, Resume, Testing } from '../1_Pages';
//import { LinkLibrary, Learning, Games, PageBuilder } from '../Pages/Testing';
/*
console.log('About', About)
console.log('Projects', Projects)
console.log('Resume', Resume)
console.log('Testing', Testing)
console.log('LinkLibrary', LinkLibrary)
console.log('Learning', Learning)
console.log('Games', Games)
console.log('PageBuilder', PageBuilder)
console.log('Article', Article)
console.log('ResumeDoc', ResumeDoc)*/

const pages = [
  {
    name: 'About Me',
    component: About,
    path: '/',
    icon: 'FaUserAlt'
  },
  {
    name: 'Projects',
    component: Projects,
    path: '/projects',
    icon: 'FaLaptopCode'
  },
  {
    name: 'Resume',
    component: Resume,
    path: '/resume',
    icon: 'FaFileAlt',
    subpath: '/resume',
    subpages: [
      {
        name: 'Print',
        component: ResumeDoc,
        path: '/print',
        icon: 'FaFilePdf'
      }
    ]
  },
  {
    name: 'Testing',
    component: Testing,
    path: '/testing',
    icon: 'FaCog',
    subpath: '/testing',
    subpages: [
      {
        name: 'Link Library',
        component: LinkLibrary,
        path: '/link-library',
        icon: 'FaLink'
      },
      {
        name: 'Learning',
        component: Learning,
        path: '/learning',
        icon: 'FaGraduationCap'
      },
      {
        name: 'Games',
        component: Games,
        path: '/games',
        icon: 'FaGamepad'
      }, // minesweeper, tic-tac-toe, chess, checkers, sudoku
      {
        name: 'PageBuilder',
        component: PageBuilder,
        path: '/pagebuilder',
        icon: 'FaCog'
      }
    ]
  }
]

export { pages, Error };


/*{
        name: 'Article',
        image: require('../assets/Projects/phoenixhacks.svg'),
        component: Article,
        path: '/article',
        icon: 'FaBook'
      },*/
/*
  {
    name: 'Link Library',
    component: LinkLibrary,
    path: '/link-library',
    icon: 'FaLink'
  },
  {
    name: 'Learning',
    component: Learning,
    path: '/learning',
    icon: 'FaGraduationCap'
  }, // architecture design, datastructures, filters, color theory, rendering, modeling, graphics
     // drag & drop w/react, 
  /*{
    name: 'Dreams',
    component: LinkLibrary,
    path: '/dreams',
    icon: 'FaStar'
  }, // house, car, invention*/
  /*{
    name: 'Games',
    component: Games,
    path: '/games',
    icon: 'FaGamepad'
  }, // minesweeper, tic-tac-toe, chess, checkers, sudoku
  {
    name: 'Article',
    component: Article,
    path: '/article',
    icon: 'FaBook'
  },
  {
    name: 'PageBuilder',
    component: PageBuilder,
    path: '/pagebuilder',
    icon: 'FaCog'
  },*/
  /**/