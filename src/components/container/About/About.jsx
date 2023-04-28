import React from 'react'
import './About.scss'
import portfolio from '../../../assets/img-1.jpeg'
import { bios } from '../../../Data'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className="about_container">
        <div className="about_left">
          <img src={portfolio} alt="about-img" />
        </div>
        <div className="about_right">
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
            href="#"
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default About
