import React from 'react'
import { socialIcons } from '../../../Data'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer" >
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
          {socialIcons.map((socialIcon, index)=>{
            return (
              <div key={index}>{socialIcon}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer
