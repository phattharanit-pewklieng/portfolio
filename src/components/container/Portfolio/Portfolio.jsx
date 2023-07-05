import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import { workNavs, workImages } from '../../../Data'
import { FiGithub, FiEye } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Portfolio() {
  const [tab, setTab] = useState({ name: 'all' })
  const [works, setWork] = useState([])
  const [active, setActive] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)

  useEffect(() => {
    if (tab.name === 'all') {
      setWork(workImages)
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name
      })
      setWork(newWork)
    }
  }, [tab])

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  const handleImageClick = (work) => {
    setSelectedWork(work)
    setShowDetails(false)
  }

  const handleDetailsClick = (work) => {
    setSelectedWork(work)
    setShowDetails(true)
  }

  return (
    <div className="container" id="portfolio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="buttons"
      >
        {workNavs.map((workNav, index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? 'active' : ''}`}
              key={index}
            >
              {workNav}
            </button>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -50 }}
        className="workImages"
      >
        {works.map((work) => {
          return (
            <div className="workImage" key={work.id}>
              <div className="workTabButtons">
                <button className='buttonWork' onClick={() => handleImageClick(work)}>Img</button>
                <button className='buttonWork' onClick={() => handleDetailsClick(work)}>Detail</button>
              </div>
              
                <div className="imageTab">
                  <img src={work.img} alt="workImg" />
                </div>
              
              {showDetails && selectedWork && selectedWork.id === work.id && (
                <div className="messageTab">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="hoverLayer"
                  >
                    <div className="workDetail">
                      <h3>{work.name}</h3>
                      <p className="stick"></p>
                      <p> {work.descriptions}</p>
                      <h4>{work.tech}</h4>
                      <p>{work.reflections}</p>
                      <p className="stick"></p>
                      <p className="status">{work.status}</p>
                    </div>
                    <motion.a
                      href={work.gitHubUrl}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiGithub />
                    </motion.a>

                    <motion.a
                      href={work.viewUrl}
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiEye />
                    </motion.a>
                  </motion.div>
                </div>
              )}
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="talk"
      >
        <div className="talk_left">
          <h3>
            so let's talk about <br /> <span>your next projects</span>
          </h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="talk_right"
        >
          <a href="#contact">Contact Me</a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Portfolio
