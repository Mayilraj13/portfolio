export const personalInfo = {
  name: 'Mayilraj R',
  title: 'MERN Stack Developer & IoT Enthusiast',
  email: 'mayilraj1314@gmail.com',
  phone: '+91 7397532574',
  location: 'Tuticorin, Tamil Nadu, India',
  github: 'https://github.com/Mayilraj13',
  linkedin: 'https://www.linkedin.com/in/mayilraj13/',
  resume: '/MAYILRAJ R.pdf',
  photo: '/pic.jpg',
  tagline: 'Building dynamic web applications with modern technologies. Passionate about creating responsive, user-friendly solutions that solve real-world problems — from full-stack platforms to smart IoT systems.',
  shortBio: 'Ex-SDE Intern @ Ibee Analytics · Web Developer Intern @ Hapus Infotech · IoT Intern @ Biglearn',
  badges: ['MongoDB', 'Express.js', 'React', 'Node.js', 'IoT', 'Django', 'Python'],
  stats: [
    { value: '5+', label: 'Projects' },
    { value: '3', label: 'Internships' },
    { value: '7+', label: 'Certifications' },
    { value: '1', label: 'Hackathon Award' },
  ],
}

export const about = {
  heading: 'From Hardware to Full-Stack — A Versatile Builder',
  paragraphs: [
    'I am a passionate **MERN Stack Developer** with hands-on experience in building dynamic, responsive web applications. My expertise spans MongoDB, Express.js, React, and Node.js, enabling me to create full-stack solutions that deliver exceptional user experiences.',
    'My journey began in Electronics & Communication Engineering, where I discovered my passion for creating innovative solutions at the intersection of web technologies and IoT. I\'ve had the privilege of working as a **Software Engineer Intern at Ibee Analytics**, **Web Developer Intern at Hapus Infotech**, and **IoT Junior Intern at Biglearn** — spanning the full stack from embedded C to modern JavaScript frameworks.',
    'I thrive on solving complex technical challenges and am particularly interested in developing scalable, efficient applications that make a positive impact. Whether it\'s crafting elegant frontend interfaces or building robust backend systems, I\'m committed to writing clean, maintainable code.',
  ],
}

export const skills = {
  categories: [
    {
      title: 'MERN Stack',
      icon: 'stack-line',
      items: [
        { name: 'MongoDB', sub: 'NoSQL Database', level: 85, color: 'green', icon: 'database-2-line' },
        { name: 'Express.js', sub: 'Backend Framework', level: 88, color: 'gray', icon: 'server-line' },
        { name: 'React', sub: 'Frontend Library', level: 90, color: 'blue', icon: 'reactjs-line' },
        { name: 'Node.js', sub: 'Runtime Environment', level: 87, color: 'green', icon: 'nodejs-line' },
      ],
    },
    {
      title: 'Frontend Technologies',
      icon: 'palette-line',
      items: [
        { name: 'HTML5', level: 95, color: 'orange', icon: 'html5-line' },
        { name: 'CSS3', level: 92, color: 'blue', icon: 'css3-line' },
        { name: 'JavaScript', level: 90, color: 'yellow', icon: 'javascript-line' },
        { name: 'Bootstrap', level: 88, color: 'purple', icon: 'bootstrap-line' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: 'database-2-line',
      items: [
        { name: 'Flask', level: 85, color: 'blue', icon: 'python-line' },
        { name: 'Django', level: 82, color: 'green', icon: 'database-line' },
        { name: 'MySQL', level: 80, color: 'blue', icon: 'database-2-line' },
        { name: 'PostgreSQL', level: 82, color: 'green', icon: 'database-line' },
      ],
    },
    {
      title: 'IoT & Embedded Systems',
      icon: 'cpu-line',
      items: [
        { name: 'Arduino', level: 95, color: 'teal', icon: 'cpu-line' },
        { name: 'Raspberry Pi', level: 85, color: 'red', icon: 'cpu-line' },
        { name: 'IoT', level: 88, color: 'indigo', icon: 'wifi-line' },
        { name: 'Embedded C', level: 90, color: 'gray', icon: 'code-s-slash-line' },
      ],
    },
    {
      title: 'Development Tools',
      icon: 'tools-line',
      gridCols: 6,
      small: true,
      items: [
        { name: 'Git', icon: 'git-branch-line', color: 'orange' },
        { name: 'GitHub', icon: 'github-fill', color: 'gray' },
        { name: 'VS Code', icon: 'code-box-line', color: 'blue' },
        { name: 'Postman', icon: 'terminal-box-line', color: 'green' },
        { name: 'NPM', icon: 'npmjs-line', color: 'red' },
        { name: 'Arduino IDE', icon: 'terminal-box-line', color: 'gray' },
      ],
    },
  ],
}

export const projects = [
  {
    title: 'Predictive Marketing Dashboard',
    description: 'A full-stack analytics platform built with React and Flask that aggregates performance metrics from social media and website channels. Features automated on-page SEO scraping and incorporates machine learning to forecast future marketing trends.',
    features: ['Time-Series Forecasting (Prophet)', 'Multi-Platform Data Aggregation', 'Automated On-page SEO Scraping', 'Interactive Data Visualizations'],
    tags: ['React & Chart.js', 'Python / Flask', 'Facebook Prophet (ML)', 'BeautifulSoup'],
    github: 'https://github.com/Mayilraj13/Marketing-dashboard-',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    wide: true,
  },
  {
    title: 'EmpowerHer – Safe Route Navigation',
    description: 'Safety-focused Android application helping women find safe routes during travel using real-time crime and traffic data. Integrated with a smart ring for AI threat detection to identify abnormal conditions and alert trusted contacts.',
    features: ['Safe Route Suggestions & Alerts', 'Live GPS Tracking & Sharing', 'Smart Ring Threat Detection', 'Emergency SOS & Police Connect'],
    tags: ['Android Studio', 'Google Maps SDK', 'Firebase', 'AI Threat Detection'],
    github: 'https://github.com/Mayilraj13/Empowerher',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f4cd7cb?auto=format&fit=crop&q=80&w=1000',
    wide: true,
  },
  {
    title: 'Student Management System',
    description: 'Full-stack web application built with Django for managing student records, course enrollment, attendance tracking, and administrative dashboard with comprehensive features.',
    tags: ['Django', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
    github: 'https://github.com/Mayilraj13/student-management-system-django',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?auto=format&fit=crop&q=80&w=1000',
    wide: false,
  },
  {
    title: 'Automated Object Detection Vehicle',
    description: 'Smart robotic car with obstacle detection and avoidance using IoT. Features real-time sensor data monitoring and intelligent navigation for autonomous mobility.',
    tags: ['Arduino', 'IoT', 'L298N Driver', 'Robotics'],
    github: 'https://github.com/Mayilraj13/Automated-object-detection-vehicle',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    wide: false,
  },
  {
    title: 'Smart Gas Leakage Detection System',
    description: 'Safety-focused system using MQ-series gas sensor to detect hazardous gas leaks. Features real-time monitoring with instant alerts through buzzer and LED indicators for home and industrial safety.',
    tags: ['Arduino', 'Embedded C', 'MQ-2 Sensor', 'IoT'],
    github: 'https://github.com/Mayilraj13/Gas-Leakage-Detection-System',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000',
    wide: false,
  },
  {
    title: 'Automated Hand Sanitizer Dispenser',
    description: 'Touchless sanitizer dispenser using Arduino and ultrasonic sensor for contactless operation. Ideal for public places, promoting hygiene and reducing germ spread.',
    tags: ['Arduino Uno', 'Embedded C', 'HC-SR04', 'Automation'],
    github: 'https://github.com/Mayilraj13/Automated-Sanitizer-Dispenser-',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=1000',
    wide: false,
  },
]

export const certifications = {
  cybersecurity: [
    {
      title: 'Deloitte – Cyber Job Simulation',
      icon: 'briefcase-line',
      color: 'green',
      description: 'Completed practical cybersecurity tasks, gaining exposure to real-world security scenarios and problem-solving approaches used in enterprise environments.',
      link: 'https://drive.google.com/file/d/1ZCjqwCD4BwhCvTxpjP9HOFYMzdpMXjy3/view?usp=sharing',
    },
    {
      title: 'TATA (Forage) – Cybersecurity Analyst Job Simulation',
      icon: 'shield-user-line',
      color: 'blue',
      description: 'Gained hands-on experience in Identity & Access Management (IAM) fundamentals, IAM strategy assessment, crafting IAM solutions, and platform integration concepts.',
      highlights: ['Identity & Access Management (IAM) fundamentals', 'IAM strategy assessment', 'Crafting IAM solutions', 'Platform integration concepts'],
      link: 'https://drive.google.com/file/d/1GMr6CwN-LCaqlPV7YQ6sfJV94DI53ivI/view?usp=sharing',
    },
  ],
  hackathons: [
    {
      title: 'Thoothukudi District Police Hackathon 2025',
      icon: 'trophy-line',
      color: 'yellow',
      description: 'Awarded a Certificate of Appreciation for submitting a working prototype. Recognized for innovation, technical skills, and dedication in developing a solution for real-world challenges.',
      link: 'https://drive.google.com/file/d/1zwaOxCjx3zXKQB6F-Lwi90dQhUH-fekZ/view?usp=sharing',
    },
    {
      title: 'Cyber Crime & Investigation Webinar (Xenclavis)',
      icon: 'presentation-line',
      color: 'purple',
      description: 'Participated in a cybersecurity-focused webinar covering cyber crime investigation techniques, digital evidence analysis, and real-world case insights.',
      link: 'https://drive.google.com/file/d/1PXVEzUzMyLpuvq8zyq8Ky0cWMrUmNMgg/view?usp=sharing',
    },
  ],
  government: [
    {
      title: 'Ministry of Electronics and Information Technology (MeitY), Government of India',
      icon: 'government-line',
      color: 'orange',
      description: 'Participated in the Digital Security Practices online quiz under the Information Security Education & Awareness (ISEA) initiative, gaining awareness of cybersecurity best practices and digital safety.',
      link: 'https://drive.google.com/file/d/10PeWIp78nJ7vNaHKCXUQu4cRjY3fz0l-/view?usp=sharing',
    },
  ],
  courses: [
    {
      title: 'Introduction to IoT – Simplilearn',
      icon: 'wifi-line',
      color: 'indigo',
      description: 'Learned core IoT concepts, sensors, devices, and communication models used in smart systems and automation.',
      link: 'https://drive.google.com/file/d/1yuLZfHP8TYerHLH4xHpH4rKaGKTpJC1j/view?usp=sharing',
    },
    {
      title: 'Python Programming – GUVI (HCL Partner)',
      icon: 'code-s-slash-line',
      color: 'blue',
      description: 'Successfully completed Python training, covering programming fundamentals, logic building, and practical problem-solving.',
      link: 'https://drive.google.com/file/d/1b7cggPXN_LGFr4AJ2inC55jhluBDBa37/view?usp=sharing',
    },
    {
      title: 'MERN Stack Webinar – GUVI',
      icon: 'stack-line',
      color: 'green',
      description: 'Gained insights into how the MERN stack (MongoDB, Express.js, React.js, Node.js) is used to build real-world web applications.',
      link: 'https://drive.google.com/file/d/1Hfvt3RY5n9cwWS8co5Jr0mtl3Z_3oMDi/view?usp=sharing',
    },
    {
      title: 'AI Tools & ChatGPT Workshop – be10x',
      icon: 'robot-line',
      color: 'purple',
      description: 'Successfully completed an intensive workshop focused on practical AI tools and ChatGPT usage. Key Learnings: Creating professional presentations, analyzing datasets, and code optimization.',
      date: 'November 9, 2025',
      link: 'https://drive.google.com/file/d/1ZCjqwCD4BwhCvTxpjP9HOFYMzdpMXjy3/view?usp=sharing',
    },
    {
      title: 'SQL Bootcamp – LetsUpgrade',
      icon: 'database-2-line',
      color: 'blue',
      description: 'Completed a hands-on SQL Bootcamp covering optimized SQL queries, database design, data retrieval, and problem-solving using relational databases.',
      date: 'June 30, 2025 – July 2, 2025',
      link: 'https://drive.google.com/file/d/1n8Vn8Ovlu7qrVDIZ5IfaEFMmuGKU8TzV/view?usp=sharing',
    },
    {
      title: 'Java Essential Training – LinkedIn Learning',
      icon: 'cup-line',
      color: 'red',
      description: 'Foundational Java course covering syntax, object-oriented programming basics, and writing clean, maintainable code.',
      date: 'November 1, 2025',
      link: 'https://drive.google.com/file/d/1GzOVjUNQmM_XUKrTdj6AwiQWVBuTgGZ9/view?usp=sharing',
    },
  ],
}

export const experience = [
  {
    role: 'Software Development Engineer Intern',
    company: 'Ibee Analytics',
    period: 'Aug 2025 – Sep 2025',
    icon: 'code-s-slash-line',
    color: 'green',
    description: 'Working on full-stack web development projects using MERN stack technologies. Developing scalable applications, implementing RESTful APIs, and creating responsive user interfaces. Collaborating with cross-functional teams to deliver high-quality software solutions.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Hapus Infotech',
    period: 'Jul 2025 – Aug 2025',
    icon: 'layout-line',
    color: 'blue',
    description: 'Designed responsive front-end interfaces with Bootstrap and CSS, improving user experience across devices. Collaborated with senior developers to debug and optimize code, reducing load time or error.',
    tags: ['Python', 'Django', 'Bootstrap'],
  },
  {
    role: 'IoT Junior Intern',
    company: 'Biglearn',
    period: 'Feb 2025',
    icon: 'sensor-line',
    color: 'purple',
    description: 'Assisted in research projects focused on developing innovative IoT solutions for Automated Object Detection Vehicle and Smart Agriculture Applications.',
    tags: ['Arduino', 'Raspberry Pi', 'Research'],
  },
  {
    role: 'Technician Apprentice',
    company: 'Apollo Tyres',
    period: 'Jul 2022 – Jul 2023',
    icon: 'tools-line',
    color: 'orange',
    description: 'Supported the installation, maintenance, and troubleshooting of motors, panels, and control systems. Performed preventive maintenance on PLCs, VFDs, and industrial equipment. Collaborated with technical teams to solve electrical and automation issues.',
    tags: ['Maintenance', 'Troubleshooting', 'PLC/VFD'],
  },
]

export const education = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'University College of Engineering, BIT Campus, Trichy',
    period: '2023 – 2026 (Expected)',
    icon: 'graduation-cap-line',
    description: 'Specializing in embedded systems and IoT technologies. Current CGPA: 7.2/10.',
    tags: ['Cloud Basics', 'Communication Protocols', 'IoT', 'Integration Methods'],
  },
  {
    degree: 'Diploma in Electronics & Communication Engineering',
    school: 'Thevanesam Eruthaya Ammal Polytechnic College',
    period: '2020 – 2022',
    icon: 'building-4-line',
    description: 'Achieved CGPA of 9.1/10. Gained strong foundation in electronics, embedded systems, and communication technologies.',
    tags: ['Embedded Systems', 'Digital Electronics', 'Hardware Basics', 'Communication'],
  },
  {
    degree: 'Higher Secondary Education',
    school: 'Government Higher Secondary School',
    period: '2018 – 2020',
    icon: 'school-line',
    description: 'Completed with 60% in Physics, Chemistry, and Mathematics.',
    tags: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  },
]
