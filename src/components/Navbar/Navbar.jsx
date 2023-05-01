import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { navLinks } from '../../Data'
import { socialIcons } from '../../Data'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [scroll, setScroll] = useState(false)
  
  const menuVariant = {
    hidden: { scale: 0 },
    visible: { scale: 50, transition: { type: 'tween', duration: 0.5 } },
  }

  const navLinkVarinats = {
    hidden: { display: 'none', opacity: 0 },
    visible: { opacity: 1, y: -30, transition: { delay: 0.7 } },
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20)
    })
  }, [])
  return (
    <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
      <div className="Nav_container">
        <div className="logo">
          <h3>Phatt</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            )
          })}
        </ul>
        <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                <a href={socialIcon.url}>
                {socialIcon.icon}
                </a>
              </div>
            )
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
              <li
                key={index}
                onClick={() => {
                  setToggle(false)
                }}
              >
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            )
          })}
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar
