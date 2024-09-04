import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Asserts/gci1.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Guy Charles  Junior Yao <br /> Nguessan</h1>
        <h5><div className="text-light">fullstack Developper</div> </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='srcoll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header