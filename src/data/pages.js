import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Projects from '../Pages/Projects';
import LinkLibrary from '../Pages/LinkLibrary';
import Article from '../Pages/Article';

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
    component: LinkLibrary,
    path: '/learning',
    icon: 'FaGraduationCap'
  }, // architecture design, datastructures, filters, color theory, rendering, modeling, graphics
  {
    name: 'Dreams',
    component: LinkLibrary,
    path: '/dreams',
    icon: 'FaStar'
  }, // house, car, invention
  {
    name: 'Games',
    component: LinkLibrary,
    path: '/games',
    icon: 'FaGamepad'
  }, // minesweeper, tic-tac-toe, chess, checkers
  {
    name: 'Article',
    component: Article,
    path: '/article',
    icon: 'FaBook'
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