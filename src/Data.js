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
  // FaFacebook,
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
import web5 from './assets/web5.png'
import web6 from './assets/web6.png'
import web7 from './assets/web7.png'
import design1 from './assets/d01.png'
import design2 from './assets/d02.jpeg'
import design3 from './assets/d03.jpeg'
import web8 from './assets/web8.png'
import web9 from './assets/web9.png'
import web10 from './assets/web10.png'
import web11 from './assets/web11.png'
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
      'Discover how to efficiently manage state and retrieve data from an API using Redux, and also how to add different categories of movies.',
    status: 'Completed',
    category: 'practise',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/movie-app',
    viewUrl: 'https://github.com/phattharanit-pewklieng/movie-app',
    activeButton: 'image',
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
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/shopping-cart',
    viewUrl: 'https://github.com/phattharanit-pewklieng/shopping-cart',
    activeButton: 'image'
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
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/meal-magic',
    viewUrl: 'https://github.com/phattharanit-pewklieng/meal-magic',
    activeButton: 'image'
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
    activeButton: 'image'
  },
  {
    id: 5,
    img: web5,
    name: 'Flimflix',
    descriptions:
      'This web application enables users to search for and select various types of movies.',
    tech: 'React, TypeScript, API, CSS',
    reflections:
      'As a team has developed web applications that can fetch both image and data from an API and display them. Additionally, the team is striving to gain a deeper understanding of the API',
    status: 'Completed',
    category: 'group project',
    gitHubUrl: 'https://github.com/harakeke-2023/Flimflix',
    viewUrl: 'https://github.com/harakeke-2023/Flimflix',
    activeButton: 'image'
  },
  {
    id: 6,
    img: web6,
    name: 'Weather App',
    descriptions:
      'This web application also allows users to search the weather in different cities.',
    tech: 'React, API , CSS, Vite',
    reflections:
      'This web application also allows users to search the weather in different cities',
    status: 'Completed',
    category: 'practise',
    gitHubUrl: 'https://github.com/harakeke-2023/Flimflix',
    viewUrl: 'https://github.com/harakeke-2023/Flimflix',
    activeButton: 'image'
  },
  {
    id: 7,
    img: web7,
    name: 'ChatABC',
    descriptions:
      'This web application allows users to ask any question to a chat bot powered by Chat GPT',
    tech: 'React, API from GPT 3.5, CSS',
    reflections: 'It works by responding with auto-generated chat messages',
    status: 'Completed',
    category: 'practise',
    gitHubUrl: 'https://github.com/harakeke-2023/Flimflix',
    viewUrl: 'https://github.com/harakeke-2023/Flimflix',
    activeButton: 'image'
  },
  {
    id: 8,
    img: design3,
    name: 'Restaurant Business front-card',
    descriptions:
      'The design is specifically crafted for a restaurant, serving as an effective promotional tool, leaving a lasting impression on potential customers. ',
    tech: 'Photoshop, hexadecimal palette picker.',
    reflections: `The design is specifically crafted for a restaurant, serving as an effective promotional tool, leaving a lasting impression on potential customers.`,
    status: 'Completed',
    category: 'Design',
    gitHubUrl: '',
    viewUrl: '',
    activeButton: 'image'
  },
  {
    id: 9,
    img: design2,
    name: 'Restaurant Business back-card',
    descriptions:
      'The design is specifically crafted for a restaurant, serving as an effective promotional tool, leaving a lasting impression on potential customers. ',
    tech: 'Photoshop, hexadecimal palette picker.',
    reflections: `Through the use of Photoshop, designing the business card for the restaurant was an exciting and rewarding experience. The software's wide array of tools and features allowed for precise control over every design aspect.`,
    status: 'Completed',
    category: 'Design',
    gitHubUrl: '',
    viewUrl: '',
    activeButton: 'image'
  },
  {
    id: 10,
    img: design1,
    name: 'Menu',
    descriptions:
      'This menu design is intended for a restaurant and focuses on two main aspects: meat options and levels of spiciness. ',
    tech: 'Photoshop, hexadecimal palette picker.',
    reflections:
      'Photoshop empowered me to design a visually appealing menu by offering flexibility, precise image editing, and enhanced productivity. I experimented with various design elements, fine-tuned layouts, and elevated visuals through color adjustments, filters, and image retouching.',
    status: 'Completed',
    category: 'Design',
    gitHubUrl: '',
    viewUrl: '',
    activeButton: 'image'
  },
  {
    id: 11,
    img: web8,
    name: 'My photo gallery',
    descriptions:
      'This is a website designed to showcase my photo gallery, allowing users to view my images. ',
    tech: 'CSS, JavaScript, and HTML.',
    reflections:
      'Building this website to showcase my photo gallery using CSS, JavaScript, and HTML was a fulfilling experience. I successfully created a visually appealing and user-friendly platform for visitors to view my images.',
    status: 'Completed',
    category: 'Personal Project',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/lightbox',
    viewUrl: 'https://phattharanit-pewklieng.github.io/lightbox/',
    activeButton: 'image'
  },
  {
    id: 12,
    img: web9,
    name: 'Healthy Web App',
    descriptions:
      'My healthy web app offers nutritious food recipes, diet guidelines, weight loss tips, and exercise recommendations.',
    tech: 'Tailwind CSS, Next.js, and linking functionality',
    reflections:
      'Developing the healthy web app deepened my understanding of Next.js and Tailwind CSS. Implementing linking functionality in Next.js improved navigation, while optimizing performance was a priority.',
    status: 'In progress ...',
    category: 'Personal Project',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/healthy-app',
    viewUrl: 'https://phattharanit-pewklieng.github.io/healthy-app/',
    activeButton: 'image'
  },
  {
    id: 13,
    img: web10,
    name: 'Travel Planing',
    descriptions:
      'This web app allows users to take notes, plan their trips, and track their budget and expenses. It also has plans for future enhancements, future function including the ability to upload images',
    tech: 'CSS, vite, java script',
    reflections:
      'Implemented positioning of all elements on the website, added functionality for refreshing forms, gained knowledge in web development.',
    status: 'In progress ...',
    category: 'Personal Project',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/travel-plan',
    viewUrl: 'https://phattharanit-pewklieng.github.io/travel-plan/',
    activeButton: 'image'
  },
  {
    id: 14,
    img: web11,
    name: 'Thai Restaurant Web App',
    descriptions:
      'This web app provides an interactive platform for customers to explore the menu, place online orders. It also includes plans for future enhancements, such as the ability to upload images for a visual representation of our dishes, booking table.',
    tech: 'CSS, Tailwind CSS, JavaScript',
    reflections:
      'Successfully implemented the layout and positioning of all elements on the website using CSS and Tailwind CSS. Developed interactive features for online ordering and gained valuable knowledge and experience in web development',
    status: 'In progress ...',
    category: 'Personal Project',
    gitHubUrl: 'https://github.com/phattharanit-pewklieng/pokpok-resturant',
    viewUrl: 'https://phattharanit-pewklieng.github.io/pokpok-resturant/',
    activeButton: 'image'
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
