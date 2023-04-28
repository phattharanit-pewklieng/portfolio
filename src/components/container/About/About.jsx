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
            I've always been passionate about web development, but my previous
            job as a manager gave me valuable skills in problem-solving,
            communication, feedback and teamwork. I particularly enjoyed working
            with the web application we used for online ordering, and found it
            fascinating to troubleshoot and fix errors. This experience fueled
            my desire to become a web developer myself, and motivated me to
            enrol at Dev Academy to pursue my dream.
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
