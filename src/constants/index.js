import {
  mobile,
  web,
  fullstack,
  javascript,
  html,
  css,
  reactjs,
  mysql,
  rvm,
  src,
  au,
  portfolio,
  pglife,
  sortingvisualiser,
  mongodb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
  
];

const education = [
  {
    title: "Masters of Computer Application",
    company_name: "University College of Engineering, BIT- Campus, Tiruchirappalli.",
    icon: au,
    iconBg: "#fff",
    date: "2021-2023",
    points: [
      "CGPA: 7.64/10",
    ],
  },
  {
    title: "Bachelors of Computer Application",
    company_name: "Sastra Deemed to be University, SRC - Campus, Kumbakonam.",
    icon: src,
    iconBg: "#fff",
    date: "2018-2021",
    points: [
      "Percentage: 6.0074/10",
      ,
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "Raj Vidyalaya Matricultaion Hr.sec School Kuttalam",
    icon: rvm,
    iconBg: "#fff",
    date: "2016-2018",
    points: [
      "percentage:82% ",
    ],
  },
  {
    title: "SSLC",
    company_name: "Raj Vidyalaya Matricultaion Hr.sec School Kuttalam",
    icon: rvm,
    iconBg: "#fff",
    date: "2015-2016",
    points: [
      "percentage:89% ",
    ],
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];




const projects = [
  {
    name: "Hotel management",
    description:
      "A restaurant website serves as a digital platform providing information about the establishment, menus, reservations, and promotions to attract and engage potential diners.",
    image: portfolio,
    live_project_link: "https://github.com/Barani27/React-User-Management",
  },
  {
    name: "React user Management",
    description:
      "React user management involves developing a web application using the React JavaScript library to facilitate user authentication, registration, authorization, profile management, and other related functionalities within the application..",
    
    image: pglife,
    live_project_link: "https://github.com/Barani27/MCQ-quiz-app",
  },
  {
    name: "Singup login mechanism",
    description:
      "A user login mechanism is a system within a software application or website that authenticates users by verifying their credentials, such as username and password, and grants access to protected resources or features upon successful authentication..",
    image: sortingvisualiser,
    live_project_link: "https://github.com/Barani27/signup-login-mechanism",
  },
];

export {
  services,
  technologies,
  projects,
  education,
};
