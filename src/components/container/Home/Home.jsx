import React from 'react'
import './Home.scss'
import portfolio from '../../../assets/img-2.jpg'
import { motion } from 'framer-motion'
function Home() {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }

  return (
    <motion.div className="container " id='home'
    initial={{ y: -15, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={
      {
        duration: 2,
        delay: 0.5
      }
    }
  >
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
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me
        </motion.a>

        {/* Excellent communication skills
        Strong attention to detail
        Proficient in [relevant software/tools]
        Skilled in problem solving and analytical thinking
        Exceptional leadership and mentorship skills */}

        {/* <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelance">Freelance</div> */}
      </div>
      </motion.div>
  )
}

export default Home
