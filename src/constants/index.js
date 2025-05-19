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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Technical Sales Specialist",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-End Developer (Internship)",
    company_name: "IQ Dev House",
    icon: "/iqdevhouse.png", // تأكد من وجود هذا الأيقون أيضاً
    iconBg: "#E6DEDD",
    date: "March 2023 - May 2023",
    points: [
      "Gained hands-on experience in front-end development using React and JavaScript.",
      "Built and optimized reusable web components.",
      "Learned best practices in responsive design and performance optimization.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "DevHouse",
    icon: "/devhouse2.png", // تأكد من وجود هذا الأيقون في مشروعك
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining user interfaces using React, JavaScript, and TypeScript.",
      "Building modern UI/UX with Tailwind CSS, Material Design, and shadcn/ui.",
      "Implementing Redux Toolkit, Axios, and React Query for state management and API handling.",
      "Distributing tasks and ensuring timely project delivery.",
      "Leading client sales presentations with visual prototypes to build trust and clarify project benefits.",
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
    name: "The PowerZone",
    description:
      "Full-stack enterprise solution with React frontend, NestJS backend, and comprehensive admin dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/9.png",
    source_code_link: "https://github.com/",
    live_link: "https://powerzonesolarenergy.com/",
    admin_link: "https://dashboard.powerzonesolarenergy.com/",
  },
  {
    name: "Jawharat Al-Tabieih Company",
    description:
      " Full-stack beauty company website with modern UI, featuring product management, client services, and an advanced admin dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/10.png",
    source_code_link: "https://github.com/",
    live_link: "https://www.jawharataltabeeaa.com.iq/",
    admin_link: "https://al-tabieih-dashboard.vercel.app/",
  },
  {
    name: "ALKHEBRA Technology Company",
    description:
      "Corporate website with custom dashboard solution. Features modern design, responsive layouts and comprehensive admin panel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/p1.png",
    source_code_link: "https://github.com/",
    live_link: "https://www.aktco.com.iq/",
    admin_link: "https://dashboard.aktco.com.iq/",
  },
  {
    name: "Sanabel Al-Diwan",
    description:
      "Full-stack solution with frontend website and admin panel for management. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/3.png",
    source_code_link: "https://github.com/",
    live_link: "https://sanabel-aldiwan.iq/",
    admin_link: "https://panel.sanabel-aldiwan.iq/",
  },
  {
    name: "Al-Mas",
    description:
      "Full-stack enterprise solution with React frontend, NestJS backend",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/4.png",
    source_code_link: "https://github.com/",
    live_link: "https://almas.com.iq/",
    admin_link: "",
  },
  {
    name: "Alreef Alakdar",
    description:
      "Business website with modern design, responsive layouts and optimized performance ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/6.png",
    source_code_link: "https://github.com/",
    live_link: "https://alreefalakdar.iq/",
    admin_link: "",
  },

  {
    name: "Malekatal Fadi Company",
    description:
      "Business website showcasing company services and products with responsive design",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/7.png",
    source_code_link: "https://github.com/",
    live_link: "https://malekatal-fadicompany.com.iq/",
    admin_link: "",
  },
  {
    name: "Sardar",
    description:
      "Static website with modern design and optimized performance. Built with responsive layouts and animation effect",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/8.png",
    source_code_link: "https://github.com/",
    live_link: "https://sardar.iq/",
    admin_link: "",
  },

  {
    name: "Points",
    description:
      " creative advertising company website showcasing branding-focused signage, modern LED displays, and impactful visual solutions. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/12.png",
    source_code_link: "https://github.com/",
    live_link: "https://pointsads.com/",
    admin_link: "",
  },
  {
    name: "Ain Al-Qanoon",
    description:
      "Elegant law firm website introducing legal services, practice areas, and the firm’s strengths in handling complex cases. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/13.png",
    source_code_link: "https://github.com/",
    live_link: "https://ain-al-qanoon2-devhosue.vercel.app/",
    admin_link: "",
  },
  {
    name: "karat-Almashrk",
    description:
      "Construction and contracting company website with modern UI, showcasing services, project highlights, and contact sections ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/14.png",
    source_code_link: "https://github.com/",
    live_link: "https://khalmashrq.com.iq/",
    admin_link: "",
  },
  {
    name: "Beirut-Road",
    description:
      " Professional construction company site featuring modern design, service listings, and real project showcases ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/15.png",
    source_code_link: "https://github.com/",
    live_link: "http://beirutroad.iq/",
    admin_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
