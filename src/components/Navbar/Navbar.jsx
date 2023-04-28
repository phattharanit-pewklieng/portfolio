import React, { useState } from 'react'
import './Navbar.scss'
import { navLinks } from '../../Data'
import { socialIcons } from '../../Data'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

function Navbar() {
  const [toggle, setToggle] = useState(false)

  const menuVariant = {
    hidden: { scale: 0 },
    visible: { scale: 50, transition: { type: 'tween', duration: 0.5 } },
  }

  const navLinkVarinats = {
    hidden: { display: 'none', opacity: 0 },
    visible: { opacity: 1, y: -30, transition: { delay: 0.7 } },
  }
  return (
    <div className="header">
      <div className="Nav_container">
        <div className="logo">
          <h3>Phatt</h3>
        </div>

        <ul className="nav_links">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={`${navLink}`}>{navLink}</a>
              </li>
            )
          })}
        </ul>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return <div key={index}>{socialIcon}</div>
          })}
        </div>
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true)
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={menuVariant}
          initial="hidden"
          animate={toggle ? 'visible' : 'hidden'}
        ></motion.div>
        <motion.div
          className="menuX"
          variants={navLinkVarinats}
          animate={toggle ? 'visible' : 'hidden'}
        >
          <HiX
            onClick={() => {
              setToggle(false)
            }}
          />
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={`${navLink}`}>{navLink}</a>
              </li>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
