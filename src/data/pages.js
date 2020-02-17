import About from '../Pages/About';
import Resume from '../Pages/Resume';
//import Home from '../Pages/Home';
import Projects from '../Pages/Projects';

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
    component: Resume,
    path: '/resume',
    icon: {
      type: 'FaFileAlt',
      color: '#ffffff'
    }
  }/*,
  {
    name: 'Resume',
    component: ResumeDoc,
    path: '/printresume',
    icon: {
      type: 'FaFilePdf',
      color: '#ffffff'
    }
  }*/
]

export default pages;