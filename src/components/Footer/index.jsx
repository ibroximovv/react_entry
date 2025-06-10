import React from 'react'
import './style.css'
import MainIcon from '../../icons/mainIcon'
import InstagramIcon from '../../icons/instagramIcon'
import FacebookIcon from '../../icons/facebookIcon'
import TwitterIcon from '../../icons/twitterIcon'
import YoutoubeIcon from '../../icons/youtoubeIcon'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo">
            <div className="logo-circle">
              < MainIcon />
            </div>
          </div>
          <div className="contact-info">
            <p>www.company.name.com</p>
            <p>companyname@gmail.com</p>
            <p>Phone: +7 485-118-03-25</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Home</h3>
          <ul>
            <li><a href="#">Landingpage</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Referral Program</a></li>
            <li><a href="#">UI & UX Design</a></li>
            <li><a href="#">Web Design</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Landingpage</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Referral Program</a></li>
            <li><a href="#">UI & UX Design</a></li>
            <li><a href="#">Web Design</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Landingpage</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Referral Program</a></li>
          </ul>
          

          <div className="social-icons">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <YoutoubeIcon />
          </div>
        </div>
      </div>
    </div>
  )
}