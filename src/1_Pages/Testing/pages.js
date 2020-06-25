import { About, Projects, Resume, Testing, LinkLibrary, Learning, Games, PageBuilder, Article, ResumeDoc } from '../../1_Pages';

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
      },
      {
        name: 'PageBuilder',
        component: PageBuilder,
        path: '/pagebuilder',
        icon: 'FaCog'
      }
    ]
  }
]