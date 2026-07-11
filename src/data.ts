import { Education, Experience, Project, Achievement, SkillCategory } from './types';

export const name = "Namami Diwan";
export const headline = " I'm Namami Diwan.";
export const bio = "My work spans robotics, embedded systems, CAD modeling, and real-time simulations. I'm pursuing B.Tech in Mechanical Engineering at IIITDM Jabalpur and BS in Electronic Systems at IIT Madras.";

export const contactInfo = {
  email: "diwannamami24@gmail.com",
  github: "https://github.com/NamamiDiwan", 
  linkedin: "https://www.linkedin.com/in/namami-diwan-a483a9342/",
};

export const contactConfig = {
  // Free Access Key from Web3Forms (https://web3forms.com)
  // Submissions will be sent to diwannamami24@gmail.com
  web3formsAccessKey: "7e02657a-d15d-43cf-ad74-03cd9a39f848",
};

export const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const education: Education[] = [
  {
    institution: "IIITDM Jabalpur",
    degree: "B.Tech in Mechanical Engineering",
    period: "2023 – Present",
    grade: "CGPA: 7.50/10",
    details: [
      "Core coursework: Kinematics of Machines, Control Systems, Mechatronics, CAD/CAM.",
      "Core Member, Basketball Club — balancing rigorous technical studies with athletic leadership."
    ]
  },
  {
    institution: "IIT Madras",
    degree: "BS in Electronic Systems",
    period: "2023 – Present",
    grade: "CGPA: 7.79/10",
    details: [
      "Specialized in electronic hardware systems, analog and digital circuits, embedded C, and microprocessor design.",
      "Acquired core programming, simulation, and hardware-software co-design fundamentals."
    ]
  },
  {
    institution: "Class XII (MP Board)",
    degree: "Senior Secondary Education",
    period: "Completed 2023",
    grade: "84.4%",
    details: ["Physics, Chemistry, Mathematics focus."]
  },
  {
    institution: "Class X (CBSE)",
    degree: "Secondary School Education",
    period: "Completed 2021",
    grade: "94.6%"
  }
];

export const experience: Experience[] = [
  {
    company: "Deccan AI Experts",
    role: "AI Data Collection Associate (Freelance/Contract) — Project Bumblebee",
    period: "June 2026",
    location: "Remote",
    description: [
      "Collected and submitted high-quality egocentric video data matching precise project guidelines.",
      "Contributed vital training data used directly for next-generation vision-based AI and advanced robotics systems."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Basketball Playing Robot | ABU Robocon 2025",
    association: "IIITDM Jabalpur Robotics Team",
    description: [
      "Reached National Finals in the prestigious Asia-Pacific robotics competition (ABU Robocon), held at Indian Institute of Technology (IIT) Delhi.",
      "Our team 'Aikyam'designed, manufactured, and wired two teleoperated robots for playing basketball. They were optimized for ball handling, shooting, and passing basketballs under match constraints.",
      "The basketball matches were live broadcasted on Doordarshan Sports, India, and on YouTube over the channels 'Prasar Bharti' and 'ABU Robocon', showcasing our team's engineering and programming skills to a global audience."
    ],
    tags: ["Robotics", "Embedded C", "CAD Design", "ABU Robocon"],
    links: [
      { label: "Certificate", url: "https://drive.google.com/file/d/1klwdjI-ktNm8fo-VhokfbfU-LTy0E1GX/view" },
      { label: "One of the broadcast videos", url: "https://www.youtube.com/live/4qnlwdfnUiQ?si=333DoPtF42nslvOg&t=18775" }
    ],
    featured: true
  },
  {
    title: "Autonomous Weed Detection Robot",
    description: [
      "Engineered an autonomous agricultural rover using Raspberry Pi to scan, detect, and target weeds.",
      "Integrated precise camera sensors and servo-actuators, establishing closed-loop control for weed localization and target spraying."
    ],
    tags: ["Raspberry Pi", "Python", "Computer Vision", "Actuators"],
    links: [
      { label: "Project Report", url: "https://drive.google.com/file/d/1dvLzOgGC4BtnnRuAHSXUTJqfl1Z-RgvY/view" }
    ],
    featured: true
  },
  {
    title: "Energy Harvesting Suspension",
    description: [
      "Designed a cutting-edge suspension system integrating piezoelectric transducers to convert kinetic vehicle vibrations into harvestable electrical energy.",
      "Modeled multi-body suspension dynamics and electrical load characteristics in MATLAB & Simulink.",
      "Completed mechanical integration and design using SolidWorks."
    ],
    tags: ["MATLAB", "Simulink", "SolidWorks", "Piezoelectric", "Energy Harvesting"],
    links: [
      { label: "Report", url: "https://docs.google.com/document/d/1ake7bx_Dh7yTeGQo1K8M9FXi7T5BWRWy4tSBhAn9POk" },
      { label: "Working Model", url: "https://drive.google.com/file/d/1Y9yZaaeUrjKlkru2AkwLM93yFKtIgn2n/view" } 
    ],
    featured: true
  },
  {
    title: "Monte Carlo Sampling",
    association: "FOSSEE IIT Bombay",
    description: [
      "Conducted a systematic review and statistical comparison between Monte Carlo, Latin Hypercube, and Sobol sampling methods.",
      "Evaluated speed, convergence bounds, and error distributions under complex uncertainty conditions."
    ],
    tags: ["Probability", "Python", "Simulation", "FOSSEE"],
    links: [
      { label: "Publication", url: "https://scilab.in/case-study-project/case-study-run/57" }
    ],
    featured: false
  }
];

export const achievements: Achievement[] = [
  {
    title: "GATE 2026: AIR 4559 in Mechanical Engineering",
    category: "academic",
  },
  {
    title: "GATE 2026: AIR 1554 in Engineering Sciences (XE)",
    category: "academic",
  },
  {
    title: "Silver Medalist, Inter IIIT Sports Meet 2025 (Basketball)",
    category: "sports"
  },
  {
    title: "Winner, Enthuse Basketball Tournament 2025",
    category: "sports"
  },
  {
    title: "Hackathon Participant, Machine Learning and AI Finance — Techkriti'25, IIT Kanpur",
    category: "hackathon",
    links: [
      { label: "ML Hackathon", url: "https://drive.google.com/file/d/1UPRbBPYMa_JG3fHhmkANUxW6SNZZBBM4/view" },
      { label: "AI-Finance Hackathon", url: "https://drive.google.com/file/d/1RLJFrVa4o6CgoE95VU3cBxWvvVAWJ9cQ/view" }
    ]
  },
  {
    title: "First Prize, District level Science Exhibition",
    category: "academic",
    links: [
      { label: "Certificate", url: "https://drive.google.com/file/d/1utTMtGdpV-R9z-oTrI6DliOb-7hujRqc/view"}
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    category: "CAD & Modeling",
    skills: ["SolidWorks", "AutoCAD", "Fusion 360", "TinkerCAD"]
  },
  {
    category: "Simulation & Dynamics",
    skills: ["ANSYS", "MATLAB", "Simulink"]
  },
  {
    category: "Programming",
    skills: ["Python", "C", "Embedded C"]
  },
  {
    category: "Electronics & Prototyping",
    skills: ["Analog Circuits", "Embedded Systems", "Raspberry Pi", "Microcontrollers"]
  },
  {
    category: "Operating Systems",
    skills: ["Linux (Ubuntu, Debian)"]
  }
];

export const extracurriculars = [
  "Core Committee Member, Basketball Club (IIITDM Jabalpur) — Organizes sports events, leads training sessions, and represents the varsity team.",
  "NCC Cadet — Achieved 'A' Certificate; trained in leadership, physical endurance, and disciplined community service."
];

export const now = {
  location: "Jabalpur / Chennai, India",
  reading: {
    title: "Introduction to Autonomous Mobile Robots",
    author: "Roland Siegwart",
    status: "65% completed"
  },
  jammingTo: {
    song: "Intro",
    artist: "The xx",
    album: "xx"
  },
  focus: "Practicing SolidWorks multi-body simulations and building autonomous control loops using Arduino/Raspberry Pi."
};
