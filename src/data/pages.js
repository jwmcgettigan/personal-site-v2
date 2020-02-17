//import ResumePage from '../Pages/Resume';
//import Home from '../Pages/Home';
//import About from '../Pages/About';
//import Projects from '../Pages/Projects';

const About = '';
const Projects = '';
const ResumePage = '';

const pages = [
  {
    name: 'About Me',
    component: About,
    path: '/',
    icon: {
      type: 'FaUserAlt',
      color: '#ffffff'
    }
  },
  {
    name: 'Projects',
    component: Projects,
    path: '/projects',
    icon: {
      type: 'FaLaptopCode',
      color: '#ffffff'
    }
  },
  {
    name: 'Resume',
    component: ResumePage,
    path: '/resume',
    icon: {
      type: 'FaFileAlt',
      color: '#ffffff'
    }
  }
]

export default pages;