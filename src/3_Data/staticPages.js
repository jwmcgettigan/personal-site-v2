import { About, Projects, Resume, Testing, LinkLibrary, Learning, Games, PageBuilder } from '../1_Pages';

export const pages = [
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
    icon: 'FaFileAlt'
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