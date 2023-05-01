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
    url: 'https://www.linkedin.com/in/phattharanit-pewklieng-845752122/'
  },
  {
    name: 'Github',
    icon: <FaGithub />,
    url: 'https://github.com/phattharanit-pewklieng'
  },
  {
    name: 'Discord',
    icon: <FaDiscord />,
    url: 'Phatt-Pewklieng-2023_Harakeke-23#2007'
  }
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
    name: 'project 1',
    category: 'web',
  },

  {
    id: 2,
    img: web2,
    name: 'project 2',
    category: 'web',
  },
  {
    id: 3,
    img: web3,
    name: 'project 3',
    category: 'app',
  },
  {
    id: 4,
    img: web4,
    name: 'project 4',
    category: 'group project',
  },
]

export const workNavs = ['All', 'Web', 'App', 'Design', 'Group Project']

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
