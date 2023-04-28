import React from 'react'
import './Home.scss'
import portfolio from '../../../assets/phatt-img.jpeg'
import { motion } from 'framer-motion'
function Home() {
  return (
    <div className="container" id="home">
      <div className="profile">
        <img src={portfolio} alt="portfolio-img" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Phattharanit Pewklieng</span>
        </h3>
        <span className="job">
          Web developer based in Auckland,
          <br />
        </span>
        <span className="text">
          Passionate <br />
          about crafting innovative <br />
          web products <br />
        </span>
        <motion.a
          href="contact"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelance">Freelance</div>
      </div>
    </div>
  )
}

export default Home
