import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GCI-YAO</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="testimonials">Testimonials</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
        <FaFacebook />
        </a>
        <a href="https://instagram.com">
        <LuInstagram />
        </a>
        <a href="https://tiktok.com">
        <FaTiktok />
        </a>
        <a href="https://twitter.com">
        <FaTwitter />
        </a>
      </div>      
      <div className="footer__copyright">
        <small>&copy; gci-yao.ci</small>
      </div>
    </footer>
  )
}

export default Footer