export const personalInfo = {
  name: 'Jeet Tetar',
  initials: 'JT',
  role: 'Aspiring Java Full Stack Developer',
  bio: 'I am a Computer Science student focused on building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. Currently learning Java Full Stack development to strengthen my backend skills, with a future goal of exploring DevOps and AWS.',
  email: 'ntetar@gmail.com',
  location: 'Ahmedabad, Gujarat, India',
  availability: 'Open to Internship & Job Opportunities',
  social: {
    github: 'https://github.com/Jeet-76674',
    linkedin: 'https://www.linkedin.com/in/jeet-tetar-5196b2312',
  },
};

export const highlights = [
  "🎓 CGPA: 9.7",
  "📜 NSDC Certified",
  "💻 Java Full Stack Developer (In Progress)",
  "🚀 Open to Internship & Job Opportunities",
];

export const skills = [
  { name: 'HTML', pct: 100 },
  { name: 'CSS', pct: 95 },
  { name: 'Bootstrap', pct: 100 },
  { name: 'JavaScript', pct: 90 },
  { name: 'React', pct: 85 },
  { name: 'SQL', pct: 100 },
  { name: 'MySQL', pct: 100 },
  { name: 'REST API', pct: 75 },
  { name: 'Git', pct: 75 },
  { name: 'GitHub', pct: 100 },
];

export const projects = [
  {
    id: 1,
    title: 'Weather App',
    category: 'WEB APP',
    description: 'A responsive weather application that fetches real-time data using a public API and displays temperature, humidity, and weather conditions with a clean UI.',
    image: '/project-1.png',
    tech: ['React', 'CSS', 'API'],
    year: '2026',
    github: 'https://github.com/Jeet-76674/WheatherApp-Using-React',
    liveUrl: 'https://wheather-app-using-react.vercel.app/',
  },
  {
    id: 2,
    title: 'GitHub Profile Fetcher',
    category: 'WEB APP',
    description: 'A JavaScript-based application that fetches GitHub user data using the GitHub API and displays profile details like repositories, followers, and avatar dynamically.',
    image: '/project-2.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    year: '2026',
    github: 'https://github.com/Jeet-76674/JS-Project',
    liveUrl: 'https://js-project-theta-roan.vercel.app/',
  },
];

export const experience = [
  {
    period: '2024 – Present',
    role: 'Aspiring Full Stack Developer',
    company: 'Self Learning',
    description: 'Learning Java Full Stack Development and building real-world projects using React and modern web technologies. Continuously improving problem-solving and development skills.',
    tags: ['Java', 'React', 'JavaScript'],
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Web Technologies Certification',
    issuer: 'NSDC',
    date: 'March 2025',
    status: 'completed',
    description: 'Completed training in HTML, CSS, and JavaScript with Grade A.',
    color: '#ff5533',
    icon: '🌐',
    image: '/nsdc-webTechnologies.png',
    credentialUrl: 'https://admin.skillindiadigital.gov.in/documentverificationbyQR?content=P0NhbmRpZGF0ZSBOYW1lID0gSkVFVCBURVRBUiYmQ2FuZGlkYXRlIElkID0gQ0FOXzM2NDEyNTY5JiZUUCBJZCA9IFRQMDA5NTg4JiZUQyBOYW1lID0gVE9QUyBURUNITk9MT0dJRVMgU0cgUk9BRCYmQmF0Y2hJZCA9IDMxODMwNjMmJkRvY3VtZW50IElEID0gRjdWS0c4WVY0QUxIUjJPRiYmVEMgQWRkcmVzcyA9IEZJUlNUIEZMT09SIFBSRU1JRVIgSE9VU0UgMSYmT1BQT1NJVEUgR1VSVURXQVJBJiZTQVJLSEVKIC0gR0FOREhJTkFHQVIgSElHSFdBWSYmVEhBTFRFSiYmQUhNRURBQkFEJiYtMzgwMDU0LiYmRG9jdW1lbnQgPSBjZXJ0aWZpY2F0ZSYmSXNzdWFuY2UgRGF0ZSA9IDAxLzAzLzIwMjU='
  },
  {
    id: 2,
    title: 'Master In Computer Science',
    issuer: 'Tops Technologies',
    date: 'Feb 2025',
    status: 'completed',
    description: 'Completed practical training in frontend development and core web technologies.',
    color: '#61dafb',
    icon: '💻',
    image: '/tops-masterInComputerScience.png',
  },
  {
    id: 3,
    title: 'Java Full Stack Development',
    issuer: 'ITVedant',
    date: 'In Progress',
    status: 'inprogress',
    description: 'Currently learning Java, Spring Boot, Hibernate, and full stack development concepts.',
    color: '#f0db4f',
    icon: '☕',
  },
  {
    id: 4,
    title: 'NSDC Certification (Full Stack)',
    issuer: 'NSDC',
    date: 'In Progress',
    status: 'inprogress',
    description: 'Pursuing government-recognized certification in full stack development.',
    color: '#00c853',
    icon: '🏆',
  },
  {
    id: 5,
    title: 'IBM Certification (Full Stack)',
    issuer: 'IBM',
    date: 'In Progress',
    status: 'inprogress',
    description: 'Pursuing industry certification focused on modern full stack development.',
    color: '#4285f4',
    icon: '📘',
  },
];

export const softSkills = [
  'Problem Solving',
  'Quick Learner',
  'Team Collaboration',
  'Communication',
  'Time Management',
  'Adaptability',
];

export const navLinks = [
  { num: '01', name: 'HOME', href: '#home' },
  { num: '02', name: 'ABOUT', href: '#about' },
  { num: '03', name: 'SKILLS', href: '#skills' },
  { num: '04', name: 'PROJECTS', href: '#projects' },
  { num: '05', name: 'EXPERIENCE', href: '#experience' },
  { num: '06', name: 'CERTIFICATIONS', href: '#certifications' },
  { num: '07', name: 'CONTACT', href: '#contact' },
];

export const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Building responsive and user-friendly web applications using modern technologies.',
  },
  {
    num: '02',
    title: 'Frontend Development',
    desc: 'Creating interactive interfaces using React and JavaScript.',
  },
  {
    num: '03',
    title: 'Learning Full Stack',
    desc: 'Currently learning Java Full Stack development to grow as a complete developer.',
  },
  {
    num: '04',
    title: 'Problem Solving',
    desc: 'Improving logical thinking and coding skills through consistent practice.',
  },
];

export const stats = [
  { value: '9.7', label: 'CGPA' },
  { value: '2+', label: 'Projects' },
  { value: '3+', label: 'Certifications' },
];
