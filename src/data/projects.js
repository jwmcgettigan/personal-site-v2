
const projects = [
  {
    name: "Case Study: Project Name",
    summary: "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likely to land your next project or job.",
    image: "phoenixhacks.svg",
    url: {
      demo: "",
      repo: ""
    },
    client: {
      name: 'Client Name',
      industry: 'Tech',
      size: '100+',
      website: 'website.com',
      description: 'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    requirements: [
      "Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Requirement donec pede justo, fringilla vel, aliquet nec.",
      "Requirement phasellus ullamcorper ipsum rutrum nunc."
    ],
    sections: [
      {
        name: "Project Overview",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
        images: []
      },
      {
        name: "The Challenge",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
        images: []
      },
      {
        name: "The Approach & Solution",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
        images: []
      },
      {
        name: "The Results",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
        images: []
      }
    ]
  },
  {
    name: "PhoenixHacks Live",
    summary: "The live site for PhoenixHacks 2020.",
    image: "phoenixhacks.png",
    url: {
      demo: "https://live.phoenixhacks.com/",
      repo: "https://github.com/PhoenixHacks/2020-live-web"
    },
    client: {
      name: 'PhoenixHacks Committee',
      industry: 'Tech',
      size: '12',
      website: 'phoenixhacks.com',
      description: 'Florida Poly\'s student hackathon organization.'
    },
    requirements: [
      "Announcements",
      "Schedule",
      "Map",
      "Resources & Links"
    ],
    content: require('./Projects/PhoenixHacksLive.md')
  },
  {
    name: "Suspect Search",
    summary: "",
    image: "moto-avigilon.jpg",
    url: {
      demo: "",
      repo: ""
    },
    client: {
      name: 'Client Name',
      industry: 'Tech',
      size: '100+',
      website: 'website.com',
      description: 'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    requirements: [
      "Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Requirement donec pede justo, fringilla vel, aliquet nec.",
      "Requirement phasellus ullamcorper ipsum rutrum nunc."
    ],
    content: require('./Projects/SuspectSearch.md')
  },
  {
    name: "RGB-D Based RTLS",
    summary: "",
    image: "RGB-D.jpg",
    url: {
      demo: "",
      repo: ""
    },
    client: {
      name: 'Client Name',
      industry: 'Tech',
      size: '100+',
      website: 'website.com',
      description: 'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    requirements: [
      "Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Requirement donec pede justo, fringilla vel, aliquet nec.",
      "Requirement phasellus ullamcorper ipsum rutrum nunc."
    ],
    content: require('./Projects/RGBD-RTLS.md')
  },
  {
    name: "Gaze-Based UI Navigation",
    summary: "",
    image: "hyperbolic.png",
    url: {
      demo: "",
      repo: ""
    },
    client: {
      name: 'Client Name',
      industry: 'Tech',
      size: '100+',
      website: 'website.com',
      description: 'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    requirements: [
      "Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Requirement donec pede justo, fringilla vel, aliquet nec.",
      "Requirement phasellus ullamcorper ipsum rutrum nunc."
    ],
    content: require('./Projects/GazeUI-Nav.md')
  },
  {
    name: "Patient Egress Alert System",
    summary: "Utilized OpenCV and YOLO to detect if a hospital patient is leaving their bed.",
    image: "VDS.png",
    url: {
      demo: "",
      repo: ""
    },
    client: {
      name: 'Client Name',
      industry: 'Tech',
      size: '100+',
      website: 'website.com',
      description: 'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    requirements: [
      "Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Requirement donec pede justo, fringilla vel, aliquet nec.",
      "Requirement phasellus ullamcorper ipsum rutrum nunc."
    ],
    content: require('./Projects/EgressAlertSystem.md')
  },
  {
    name: "Renegade",
    summary: "Lead a team of two in the creation and testing of software for a level 3 autonomous vehicle using computer vision and sensor fusion technologies: OpenCV, ROS, LiDAR, ZED Stereoscopic Camera, and a Nvidia TX2.",
    image: "renegade.jpg",
    url: {
      demo: "",
      repo: "https://github.com/jwmcgettigan/renegade"
    },
    client: {
      name: 'Client Name',
      industry: 'Tech',
      size: '100+',
      website: 'website.com',
      description: 'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    requirements: [
      "Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Requirement donec pede justo, fringilla vel, aliquet nec.",
      "Requirement phasellus ullamcorper ipsum rutrum nunc."
    ],
    content: require('./Projects/Renegade.md')
  },
]

export default projects;