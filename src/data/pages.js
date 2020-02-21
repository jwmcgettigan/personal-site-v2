import About from '../Pages/About';
import Resume from '../Pages/Resume';
//import Home from '../Pages/Home';
import Projects from '../Pages/Projects';

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
  }/*,
  {
    name: 'Resume',
    component: ResumeDoc,
    path: '/printresume',
    icon: 'FaFilePdf'
  }*/
]

export default pages;