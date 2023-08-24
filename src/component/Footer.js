import React from 'react'
import FooterLogo from '../Assests/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'


export default function Footer() {
  return (
    <div className='footer-wraper'>
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={FooterLogo} alt="" />
            </div> 
            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebook />
            </div>
        </div>    
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrer</span>
                <span>Work</span>
                <span>Testimonials</span>
            </div>
            <div className="footer-section-columns">
                <span>+91 98888-08888</span>
                <span>enquiry@food.com</span>
                <span>press@food.com</span>
                <span>help@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>  
    </div>
  )
}
