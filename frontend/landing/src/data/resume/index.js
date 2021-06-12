// Resume

const resume = {
  contact: {
    name: "Justin McGettigan",
    phone: {
      text: "‪(352) 585-9655‬",
      url: "tel:+1-352-585-9655‬",
      icon: "FaPhone"
    },
    email: {
      text: "jwmcgettigan@gmail.com",
      url: "mailto:jwmcgettigan@gmail.com",
      icon: "FaEnvelope"
    },
    address: {
      text: "Webster, FL",
      url: "https://www.google.com/maps/place/Webster+FL",
      icon: "FaMapMarkerAlt"
    },
    website: {
      text: "www.jwmcgettigan.com",
      url: "https://jwmcgettigan.com",
      icon: "FaGlobe"
    },
    github: {
      text: "github.com/jwmcgettigan",
      url: "https://github.com/jwmcgettigan",
      icon: "FaGithub"
    },
    linkedin: {
      text: "linkedin.com/in/jwmcgettigan",
      url: "https://linkedin.com/in/jwmcgettigan",
      icon: "FaLinkedinIn"
    }
  },
  education: {
    university: "Florida Polytechnic University",
    website: "http://floridapoly.edu/",
    location: "Lakeland, FL",
    time: "Aug 2016 - Dec 2019",
    major: "Computer Science, B.S. (GPA: 3.8) with a Concentration in Cyber Security",
    coursework: {
      fundamentals: 'Algorithms, Data Structures, OS Concepts, Networks, Project Management, Statistics',
      topics: 'Computer Vision, Autonomous Systems, Software Engineering, Human-Computer Interaction'
    }, // Select the relevant coursework depending on the role and focus
  },
  employment: [ // Select the relevant employement depending on the role and focus
    {
      company: "Motorola Solutions",
      position: "Software Engineer Intern",
      description: "Systems and Solutions team for Innovation Design and Realization.",
      website: "https://www.motorolasolutions.com/",
      time: "May 2019-Aug 2019",
      highlights: [
        "Prototyped a cost-efficient RGB-D based RTLS, similar to OpenPTrack, by testing different RTLS's for people tracking, creating deployment models, and performing cost-benefit and feasibility analyses.",
        "Visualized the distance of persons from a point, based upon the strength of their phones' bluetooth signal, by using plot.ly to process data through an Azure API.",
        "Collaborated with a team on a hackathon project (Suspect Search) by implementing the keyword detection, speech-to-text, and natural language processing components.",
      ],
      leveraged: "Git, Docker, C, C++, Python, OpenCV, Linear Algebra, Azure App/Log Analytics, plot.ly, Grafana, Intel RealSense SDK & D435 RGB-D camera."
    },
    {
      company: "Maven Asset Management",
      position: "IT Administrator",
      description: "",
      website: "https://www.mavenasset.com/",
      time: "Feb 2017-May 2019",
      highlights: [
        "Refined management of Windows and Linux development VM's through VMware vSphere by crafting templates, standardizing server documentation, and automating server updates and backups.",
        "Improved company website security and performance through WordPress updates, backups, and database optimization.",
        "Implemented a network monitor, firewall and VPN, and centralized security administration by respectively creating a server for LibreNMS, pfSense, and Kaspersky Security Center.",
        "Assessed and inventoried the entire IT infrastructure by creating diagrams, supporting documentation, and advocating the use of management tools like Trello.",
      ],
      leveraged: "Bash Scripting, Virtualization (VMware vSphere), Network Security (pfSense), Computer Security (Kaspersky Security Center), SQL Database Management (phpMyAdmin), cPanel, and WordPress."
    }/*,
    {
      company: "Florida Polytechnic University",
      position: "Research Assistant",
      website: "",
      time: "May 2018-Dec 2018",
      highlights: [
        "Contributed to a survey of existing hardware accelerators for DNNs by analyzing over 30 relevant research papers."
      ],
      leveraged: ""
    }*/
  ],
  projects: [ // Select the relevant projects depending on the role and focus
    {
      name: "Personal Website",
      website: "https://jwmcgettigan.com",
      desc: "<a href='https://www.jwmcgettigan.com/'>www.jwmgettigan.com</a> (for more information and projects)",
      highlights: [],
      utilized: "JavaScript, HTML, CSS, ReactJS, NodeJS, Git, MongoDB, Docker"
    },
    {
      name: "PhoenixHacks Live",
      website: "",
      desc: "",
      highlights: [
        "Developed a React app that functions as a real-time information hub for users to refer to during PhoenixHacks.",
        "Setup an API server hosting a discord bot and a socket.io server - for real-time announcements from discord."
      ],
      utilized: "JavaScript, HTML, CSS, ReactJS, NodeJS, ExpressJS, DiscordJS, SocketIO, Git"
    },
    {
      name: "RGB-D Based RTLS",
      website: "",
      desc: "",
      highlights: [
        "Exercised linear algebra to convert between spatial frames of reference.",
        "Created stitched visualizations of point cloud data from multiple cameras and a top-down view of tracked persons."
      ],
      utilized: "Python, OpenCV, C, C++, OpenPTrack, ROS, Linux, Git"
    },
    {
      name: "Gaze-Based UI Navigation",
      website: "",
      desc: "",
      highlights: [
        "Developed an OpenCV application that walks the user through calibrating their eyes' focal point with their mouse cursor.",
      ],
      utilized: "Python, OpenCV, Git"
    },
    {
      name: "Renegade",
      website: "",
      desc: "",
      highlights: [
        "Lead a team of two in the creation and testing of software for a level 3 autonomous vehicle using computer vision and sensor fusion technologies."
      ],
      utilized: "Python, OpenCV, ROS, LiDAR, ZED Stereoscopic Camera, Nvidia TX2, Linux, Git"
    }
  ],
  skills: [
    {
      type: 'Software',
      fluent: '',
      proficient: "Python, JavaScript, Java, Unix, Git, HTML/CSS, Bash",
      familiar: "C, C++, C#, SQL, NoSQL"
    }
  ]
}

export default resume;