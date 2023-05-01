import React from 'react'
import { socialIcons } from '../../../Data'
import './Footer.scss'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyRight">
        <p>
          Copyright&copy;2023 All rights reserved | Made by
          <span> Phattharanit Pewklieng</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return <div key={index}>{socialIcon}</div>
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
