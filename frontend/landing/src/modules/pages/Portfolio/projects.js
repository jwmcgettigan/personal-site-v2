import moment from 'moment';

// use pause, play, & stop to indicate 'haitus', 'in progress', and 'done'
const lastActiveCurrent = moment().format('MMM YYYY');
const projects = [
  {
    name: "PhoenixHacks Live",
    summary: "The live site for PhoenixHacks 2020.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/PhoenixHacks Live.gif'),
    urls: [
      {
        href: 'https://live.phoenixhacks.com/',
        icon: 'FaGlobe'
      },
      {
        href: 'https://github.com/PhoenixHacks/2020-live-web',
        icon: 'FaGithub'
      }
    ],
    tags: ['javascript', 'nodejs', 'reactjs', 'HTML', 'CSS'],
    lastActive: 'Jan 2020'
  },
  {
    name: "Suspect Search",
    summary: "Use geolocation + verbal description + security cameras to find suspects.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/Suspect Search.jpg'),
    urls: [],
    tags: ['python', 'STT', 'NLP'],
    lastActive: 'July 2019'
  },
  {
    name: "RGB-D Based RTLS",
    summary: "Track and visualize people in a room.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/RGB-D Based RTLS.jpg'),
    urls: [],
    tags: ['computer vision', 'python', 'opencv'],
    lastActive: 'Aug 2019'
  },
  {
    name: "Gaze-Based UI Navigation",
    summary: "Move your mouse to your gaze's destination.",
    status: {
      title: 'Haitus',
      icon: 'FaPauseCircle',
      color: '#978840'
    },
    image: require('assets/projects/Gaze-Based UI Navigation.jpg'),
    urls: [],
    tags: ['computer vision', 'python', 'opencv', 'human-computer interaction'],
    lastActive: 'Dec 2019'
  },
  {
    name: "Patient Egress Alert System",
    summary: "Detects if a patient is leaving their bed.",
    image: require('assets/projects/Patient Egress Alert System.jpg'),
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    }, // 'unsatisfied completion'?
    urls: [],
    tags: ['computer vision', 'python', 'opencv'],
    lastActive: 'May 2019'
  },
  {
    name: "Renegade",
    summary: "A level 3 autonomous vehicle.",
    status: {
      title: 'Complete',
      icon: 'FaStopCircle',
      color: '#975450'
    },
    image: require('assets/projects/Renegade.jpg'),
    urls: [
      {
        href: 'https://github.com/jwmcgettigan/renegade',
        icon: 'FaGithub'
      }
    ],
    tags: ['computer vision', 'python', 'opencv', 'lidar', 'stereoscopic camera', 'autonomous systems'],
    lastActive: 'May 2018'
  },
  {
    name: "Project Euler",
    summary: "My answers to Project Euler problems.",
    status: {
      title: 'In Progress',
      icon: 'FaPlayCircle',
      color: '#3e7068'
    },
    image: require('assets/projects/Project Euler.jpg'),
    urls: [
      {
        href: 'https://github.com/jwmcgettigan/project-euler-solutions',
        icon: 'FaGithub'
      }
    ],
    tags: ['python', 'javascript', 'math'],
    lastActive: lastActiveCurrent
  },
  {
    name: "My Personal Website",
    summary: "A place to advertise and express myself.",
    status: {
      title: 'In Progress',
      icon: 'FaPlayCircle',
      color: '#3e7068'
    },
    icon: 'FaGlobe',
    urls: [],
    tags: ['javascript', 'nodejs', 'reactjs', 'HTML', 'CSS', 'MongoDB', 'API', 'CMS', 'Docker', 'full-stack'],
    lastActive: lastActiveCurrent
  },
];
// derive the path for each project from its name
projects.map(project => {
  project.path = `/portfolio/${project.name.replace(/\s+/g, '-').toLowerCase()}`
})

// sort them by status, then by date
projects.sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive));

export default projects;