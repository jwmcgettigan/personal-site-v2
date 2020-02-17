import ResumePage from '../Pages/Resume';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';

const pages = [
  {
    component: Home,
    path: '/'
  },
  {
    component: ResumePage,
    path: '/resume'
  },
  {
    component: Projects,
    path: '/projects'
  },
  {
    component: About,
    path: '/about'
  }
]

export default pages;