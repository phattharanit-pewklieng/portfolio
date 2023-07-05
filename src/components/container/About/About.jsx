import React from 'react'
import './About.scss'
import portfolio from '../../../assets/img-3.jpeg'
import { bios } from '../../../Data'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="container" id="about">
      <motion.div initial={{opacity:0}} whileInView={{y: [-50, 0], opacity:1}} className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
        </motion.div>
      <div className="about_container">
        <motion.div initial={{x:0, opacity:0}} whileInView={{x:[-250, 0], opacity:1}} transition={{duration:1}} className="about_left">
          <motion.img src={portfolio} whileHover={{y: -48, x:-55}}
          transition={{duration:0.3}}
           alt="about-img" />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}>
          <p>
            I'm a Software Developer with a passion for problem-solving and a
            proven track record of successful teamwork. I have experience in
            technical support and a basic understanding of hardware and
            software. My background as a Store Manager in retail has also
            equipped me with valuable management skills. Currently, I am honing
            my skills as a full-stack web developer at Dev Academy. My expertise
            includes JavaScript, React, Redux, Node.js, HTML, CSS, and RESTful
            APIs. I am dedicated to expanding my knowledge and skills in this
            field and thrive on taking on new challenges.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="biokey">
                  {bio.icon}
                  {bio.key}:
                </span>
                <span className="bioValue"> {bio.value}</span>
              </div>
            )
          })}
          <motion.a
            href='/phattharanit_cv_23.pdf'
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default About
