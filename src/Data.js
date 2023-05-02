import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
// import { BsMedium } from 'react-icons/bs'
// import portfolio from "./assets/portfolio.jpg"
import web1 from './assets/web1.png'
import web2 from './assets/web2.png'
import web3 from './assets/web3.png'
import web4 from './assets/web4.png'
// import work5 from "./assets/work5.png";
// import work6 from "./assets/work6.png";

export const navLinks = ['home', 'about', 'skills', 'portfolio', 'contact']

export const socialIcons = [
  {
    name: 'Linkedin',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/phattharanit-pewklieng-845752122/',
  },
  {
    name: 'Github',
    icon: <FaGithub />,
    url: 'https://github.com/phattharanit-pewklieng',
  },
  {
    name: 'Discord',
    icon: <FaDiscord />,
    url: 'Phatt-Pewklieng-2023_Harakeke-23#2007',
  },
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: 'Name',
    value: 'Phattharanit',
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: 'Phone',
    value: '021 02530921',
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: 'Email',
    value: 'phattharanit.noei@gmail.com',
  },
]

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
]

export const experiences = [
  {
    id: 1,
    year: '2023',
    position: 'Trainee - Full Stack Web Developer',
    company: 'Dev Academy Aotearoa',
  },
  {
    id: 2,
    year: '2020 - 2023',
    position: 'Store Manager',
    company: 'Starbucks, St Lukes',
  },
  {
    id: 3,
    year: '2017 - 2020',
    position: 'Shift Supervisor',
    company: 'Starbucks, 220 Queen Street',
  },
  {
    id: 4,
    year: '2012 - 2017',
    position: 'KitchenHand & Waitress',
    company: 'Thai Village Restaurant, Remuera',
  },
]
export const finishes = [
  {
    id: 1,
    number: '6+',
    itemName: 'Years Of Experience',
  },
  {
    id: 2,
    number: '150+',
    itemName: 'Satisfied Customers',
  },
  {
    id: 3,
    number: '669+',
    itemName: 'Designed Items',
  },
  {
    id: 4,
    number: '117+',
    itemName: 'Clients Served',
  },
]
export const workImages = [
  {
    id: 1,
    img: web1,
    name: 'Movie App',
    descriptions:
      'This web application that provides a comprehensive list of movies and enables users to search for their preferred movies.',
    tech: 'ReactJs, Redux ToolKit',
    reflections:
      'Discover how to utilize Redux to efficiently manage state and retrieve data from an API.',
    status: 'Completed',
    category: 'practise',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng',
    viewUrl: 'https://github.com/phattharanit-pewklieng',
  },

  {
    id: 2,
    img: web2,
    name: 'Shopping Cart',
    descriptions:
      'This web application enables users to shop, add products to their cart, and remove items from it.',
    tech: 'Vite, React, TypeScript, and Bootstrap',
    reflections:
      'Improve my knowledge of building shopping carts with Bootstrap and TypeScript',
    status: 'Completed',
    category: 'practise',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng',
    viewUrl: 'https://github.com/phattharanit-pewklieng',
  },
  {
    id: 3,
    img: web3,
    name: 'Meal-Magic',
    descriptions:
      'This web application lets users search for recipes based on the ingredients they have',
    tech: 'ReactJs, API',
    reflections: 'Learn how to fetch data from an API using an API key',
    status: 'In progress ...',
    category: 'personal project',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/Meal-Magic',
    viewUrl: 'https://github.com/phattharanit-pewklieng/Meal-Magic',
  },
  {
    id: 4,
    img: web4,
    name: 'Waitless',
    descriptions:
      'This web application allows customers to order food by scanning a QR code, which is then sent directly to the kitchen. Staff members can also manage food items by adding, deleting, and editing them as needed.',
    tech: 'React, TypeScript, Tailwind, Jest-UnitTesting',
    reflections:
      'As a team, we built Full Stack web applications while also deepening our understanding of unit testing and the Tailwind CSS framework.',
    status: 'Completed',
    category: 'group project',
    gitHubUrl: 'https://github.com/harakeke-2023/Waitless',
    viewUrl: 'https://github.com/harakeke-2023/Waitless',
  },
]

export const workNavs = [
  'All',
  'Practise',
  'Personal Project',
  'Group Project',
  'Design',
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: 'Auckland CBD, New Zealand 1010',
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: 'phattharanit.noei@gmail.com',
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: '+64 210253921',
  },
]
