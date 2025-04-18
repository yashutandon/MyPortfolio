const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Coding Profiles",
    link: "#coding-profiles",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Growth Journey",
    link: "#growth-journey",
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
  { value: 3, suffix: "+", label: "Years of Learning Experience" },
  { value: 8, suffix: "+", label: "Mini Projects Completed" },
  { value: 7, suffix: "+", label: "Languages Learned (C++, JS, etc.)" },
  { value: 400, suffix: "+", label: "Coding Problems Solved on Coding Platforms" },
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
    title: "Full-Stack Web Developer",
    desc: "Proficient in building scalable, responsive web apps using MERN stack, Next.js, and modern UI libraries.",
  },
  {
    imgPath: "/images/logos/chatgpt.png",
    title: "AI Integration & APIs",
    desc: "Experienced in integrating AI models like GPT & Gemini via APIs (OpenAI, Vapi etc.) for real-world apps.",
  },
  {
    imgPath: "/images/problemskills.png",
    title: "Problem Solving & DSA",
    desc: "Strong grasp of Data Structures and Algorithms with regular practice on LeetCode, GFG, and Codeforces.",
  },
  {
    imgPath: "/images/communication.png",
    title: "Communication Skills",
    desc: "Capable of explaining complex tech concepts in a simple way, ensuring smooth collaboration, clear documentation, and effective teamwork.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
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
    name: "Project Manager",
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
    name: "Software Developer",
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
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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
    url:"",
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
  testimonials,
  socialImgs, 
  techStackIcons,
  techStackImgs,
  navLinks,
};
