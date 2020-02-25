import About from '../Pages/About';
import Resume from '../Pages/Resume';
//import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import LinkLibrary from '../Pages/LinkLibrary';
import Project from '../Pages/Project';

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
    name: 'Project',
    component: Project,
    path: '/project',
    icon: 'FaCogs'
  }/*,
  {
    name: 'Resume',
    component: ResumeDoc,
    path: '/printresume',
    icon: 'FaFilePdf'
  }*/
]

export default pages;