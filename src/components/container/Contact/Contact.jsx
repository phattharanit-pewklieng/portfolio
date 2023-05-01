import './Contact.scss'
import { contacts, socialIcons } from '../../../Data'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5xo0ach',
        'template_ushbkef',
        form.current,
        'PbpB3WkRKwSbUyvaV'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi!</h3>
          <p className="contact_text">
            Thank you for visiting my portfolio! If you have any questions or
            would like to discuss a project, I would love to hear from you. You
            can contact me using the details below, or by filling out the
            contact form. I aim to respond to all inquiries as quickly as
            possible, and I look forward to hearing from you!
          </p>
          {contacts.map((contact) => {
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
                <div key={index}>
                  <a href={socialIcon.url}>{socialIcon.icon}</a>
                </div>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="row"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />

              <input
                className="row"
                type="email"
                name="user_email"
                placeholder="Email"
              />

              <textarea className="row" name="message" placeholder="Message" />

              <motion.button
                className="btn row"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Send
              </motion.button>
            </form>
            {isSubmitting && <div className="loading">Sending email...</div>}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
