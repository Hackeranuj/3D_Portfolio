import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Data Analytics Internship",
    company_name: "KMPG",
    icon: starbucks,
    iconBg: "#fff",
    date: "June 2023 - July 2023",
    points: [
      "During my data analytics internship, I engaged in diverse tasks to enhance my skills.",
      "I cleaned and manipulated raw datasets, uncovering valuable insights through exploratory analysis.",
      "Collaborating with cross-functional teams, I contributed to generating data-driven reports and visualizations, aiding in strategic decision-making.",
      "I leveraged Python, R, SQL, Excel, and visualization tools like Matplotlib and Tableau to manipulate, analyze, and visualize complex datasets for informed decision-making.",
    ],
  },
  {
    title: "Advanced Software Engineering Virtual Program",
    company_name: "Walmart Global Tech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "During my participation in the Advanced Software Engineering Virtual Experience Program, I engaged in a range of tasks.",
      " I collaborated with a virtual team to develop and deploy software solutions, gaining hands-on experience in agile methodologies and version control.",
      "I tackled complex coding challenges, implemented debugging techniques, and optimized code for efficiency.",
      " I also focused on enhancing user experiences by designing intuitive interfaces and seamlessly integrating software modules.",
    ],
  },
  {
    title: "Machine Learning",
    company_name: "CodSoft",
    icon: shopify,
    iconBg: "#fff",
    date: "Jul 2023 - Present",
    points: [
      "Developing and maintaining Recommendation Systems using Machine Learning, Python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive system and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Iot & Machine Learning",
    company_name: "Iotbolt",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Participated in a hands-on internship focused on IoT and Machine Learning, gaining practical exposure to cutting-edge technologies.",
      "Collaborated with a cross-functional team to design, develop, and implement IoT solutions that leverage Machine Learning for enhanced functionality.",
      "Successfully integrated IoT devices with Machine Learning algorithms to enable data-driven decision-making and predictive insights.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Music Website",
    description:
      "Welcome to our music website, where melody meets technology! Our website is a harmonious blend of HTML, CSS, and JavaScript, carefully orchestrated to deliver a delightful and immersive musical experience to all visitors..",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Hackeranuj",
  },
  {
    name: "Razorpay Clone",
    description:
      "Welcome to our versatile website clone - a labor of love crafted with HTML, CSS, and JavaScript. Our clone aims to replicate the essence and functionality of your favorite website, offering a familiar yet unique experience to users..",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Hackeranuj",
  },
  {
    name: "Movie Recommendation",
    description:
      "Welcome to our movie recommendation website, powered by Machine Learning and Python. Search for any movie, and we'll provide you with five related movie recommendations tailored to your interests. Create a profile, rate movies.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Hackeranuj",
  },
];

export { services, technologies, experiences, testimonials, projects };