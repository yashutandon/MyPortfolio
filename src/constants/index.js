const navLinks = [
  {
    name: "Work Experince",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Coding-Profiles",
    link: "#coding-profiles",
  },
  {
    name: "Skills",
    link: "#skills",
  },
 
 
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];


 const counterItems = [
  { value: 1, suffix: "+", label: "Years of Professional Experience" },
  { value: 5, suffix: "+", label: "Production-Grade Projects Built" },
  { value: 4, suffix: "+", label: "Programming Languages (C++, Python, JS, TS)" },
  { value: 500, suffix: "+", label: "DSA Problems Solved (LeetCode, CodeChef, GFG)" },
];

const logoIconsList = [
  {
    
    imgPath: "/images/logos/java.png",
  },
  {
    imgPath: "/images/logos/javascript.png",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/tailwindcss.png",
  },
  {
    imgPath: "/images/logos/nodejs.png",
  },
  {
    imgPath: "/images/logos/expressjs.png",
  },
  {
    imgPath: "/images/logos/typescript.png",
  },
  {
    imgPath: "/images/logos/nextjs.png",
  },
  {
    imgPath: "/images/logos/chatgpt.png",
  },
  {
    imgPath: "/images/logos/firebase.png",
  },
  {
    imgPath: "/images/logos/cpp.png",
  },
];
 const abilities = [
  {
    imgPath: "/images/webdev.png",
    title: "Full-Stack Web Development",
    desc: "Build production-grade SaaS apps using Next.js, TypeScript, Node.js, PostgreSQL, Prisma, and Tailwind with secure auth, dashboards, and scalable APIs.",
  },
  {
    imgPath: "https://chatgpt.com/favicon.ico",
    title: "AI Integration & Automation",
    desc: "Integrate OpenAI agents, AI chat, transcripts, summaries, and background workers using Inngest, Vapi, and event-driven pipelines for real-time apps.",
  },
  {
    imgPath: "/images/problemskills.png",
    title: "DSA & Competitive Programming",
    desc: "Solved 500+ problems with strong command over arrays, trees, graphs, DP, and problem-solving under contest constraints.",
  },
  {
    imgPath: "https://a0.awsstatic.com/libra-css/images/site/touch-icon-iphone-114-smile.png",
    title: "DevOps & Cloud Deployment",
    desc: "Deploy Dockerized services on AWS (EC2, S3, SES, CloudWatch) with CI-ready setups and performance optimizations using SSR and code-splitting.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Gen Ai Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Full Stack Developer",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Gen Ai Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Full Stack Developer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

 const expCards = [
  {
    title: "Full Stack Developer Intern — CatalystCare",
    date: "Oct 2025 - Present",
    responsibilities: [
      "Worked on production-grade mental wellness SaaS using Next.js, TypeScript, Node.js, PostgreSQL, and Prisma with secure role-based dashboards.",
      "Designed and deployed scalable REST APIs with JWT authentication, RBAC, and secure file upload pipelines.",
      "Optimized Prisma queries and database indexing, reducing critical API response times by 25% on high-traffic endpoints.",
      "Deployed Dockerized services on AWS (EC2, S3, SES, CloudWatch) and improved Lighthouse scores by 20% using SSR and code-splitting.",
    ],
  },
  {
    title: "Web Developer Intern — Campalin Innovations",
    date: "June 2024 - July 2024",
    responsibilities: [
      "Developed company website using React, Redux, and Tailwind CSS, improving user engagement by ~30%.",
      "Integrated REST APIs with frontend in collaboration with backend team, reducing delivery time by ~20%.",
      "Refactored reusable components to reduce UI bugs and improve code maintainability.",
      "Implemented design and usability improvements based on cross-functional team feedback.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    url:"https://www.instagram.com/yashu_tandon?igsh=emR3eHVxaWttcHJ1",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url:"https://www.facebook.com/yashu.tandon.10/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url:"https://x.com/Yashu84868099",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/yashu-tandon-279038260/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs, 
  techStackIcons,
  techStackImgs,
  navLinks,
};
