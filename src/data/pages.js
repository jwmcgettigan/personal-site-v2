import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Projects from '../Pages/Projects';
import LinkLibrary from '../Pages/LinkLibrary';
import Learning from '../Pages/Learning';
import Article from '../Pages/Article';
import PageBuilder from '../Pages/PageBuilder';
import Games from '../Pages/Games';

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
    icon: 'FaFileAlt'
  },
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
  {
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
  }
  /*,
  {
    name: 'Resume',
    component: ResumeDoc,
    path: '/printresume',
    icon: 'FaFilePdf'
  }*/
]

export default pages;