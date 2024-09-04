import React from 'react'
import './about.css'
import ME from '../../Asserts/gci.jpeg'
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaFolderPlus } from "react-icons/fa";
const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                 <h5>Experience</h5>
                 <small>2+ Years Working</small> 
              </article>

              <article className='about__card'>
                <HiUsers className='about__icon' />
                 <h5>Clients</h5>
                 <small>200+ worldwide</small> 
              </article>

              <article className='about__card'>
                 <FaFolderPlus className='about__icon' />
                 <h5>Projects</h5>
                 <small>80+ completed</small> 
              </article>
            </div>
            <p>
              Parcours à PIGIER-CI , Je me présente comme étant un developpeur fullstack .
              Je suis titulaire d'un Bac-D et d'un BTS en Informatique-developpeur-d'applications,
              je dispose aussi d'une certification  MOS-Excel avec une brillante note de 850 points,
              j'excelle également  en réseau et génie logiciel à PIGIER-CI.
              .
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}
// rafce
export default About