import React from 'react'
import './Contact.scss'
import { contacts, socialIcons } from '../../../Data'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="container" id="contact">
      <div className="title">
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </div>
      <div className="contact_form">
        <div className="contact_left_container">
          <h3>Just Say Hi!</h3>
          <p className='contact_text'>
            Thank you for visiting my portfolio! If you have any questions or
            would like to discuss a project, I would love to hear from you. You
            can contact me using the details below, or by filling out the
            contact form. I aim to respond to all inquiries as quickly as
            possible, and I look forward to hearing from you!
          </p>
          {contacts.map(contact => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
              <div key={index}>{socialIcon}</div>
              )
            })}
          </div>
          </div>
        
            <div className="contact_right">
              <h3>Get In Touch</h3>
              <div className="row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="row">
                <input type="number" placeholder='Phone Number' />
                <input type="email" placeholder="Email" />
              </div>
              <div className="row">
                <textarea placeholder="Message" />
              
            </div>
            <motion.div className="btn" whileHover={{scale:1.1}} transition={{duration:0.3}}>
              <a href="#">Send</a>
            </motion.div>
          </div>
        </div>
      </div>
    
  )
}

export default Contact
