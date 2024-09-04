import React from 'react'
import './portfolio.css'
import img1 from '../../Asserts/prj5.jpg'
import img2 from '../../Asserts/prj2.jpg'
import img3 from '../../Asserts/prj3.jpg'
import img4 from '../../Asserts/prj4.jpg'
import img5 from '../../Asserts/img5.avif'
import img6 from '../../Asserts/img6.avif'



// DO NOT USE IMAGES IN PRODUCTION 


const data = [
  {
    id : 1,
    image : img1,
    title : 'Crypto Currency Dashboard & Financial Visualization ',
    github : 'https://github.com',
    dema: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-visualization'
  },
  {
    id: 2,
    image : img2,
    title : 'Charts templates & infographics Figma',
    github : 'https://github.com',
    demo : 'https://dribbble.com/shots/16588766-Drian-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image : img3,
    title : 'Figma dashboard UI kit for data design web apps',
    github : 'https://github.com',
    demo : 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-Ui-kit-for-data-design-web-apps'
  },

]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={img1} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href="https://gci-yao/github.com" className='btn' target='__blank'>Github</a>
                <a href="https://dribbble.com/Alien__pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={img2} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href="https://gci-yao/github.com" className='btn' target='__blank'>Github</a>
                <a href="https://dribbble.com/Alien__pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={img3} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href="https://gci-yao/github.com" className='btn' target='__blank'>Github</a>
                <a href="https://dribbble.com/Alien__pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={img4} alt="" />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href="https://gci-yao/github.com" className='btn' target='__blank'>Github</a>
                <a href="https://dribbble.com/Alien__pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          
      </div>
    </section>
  )
}

export default Portfolio