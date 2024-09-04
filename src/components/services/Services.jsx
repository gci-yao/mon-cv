import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='service'>
       <h5>What I Offer</h5>
       <h2>Services</h2>

       <div className="container services__container">
          <article className="service">
              <div className="service__head">
                <h3>UI/UX Design</h3>
              </div>
              <ul className='service__list'>
                  <li>
                    <BiCheck className='service__list-icon' />
                    <p>Création de marquettes basse fidéles pour visualiser la structure de l'application et tester différentes idées d'interface .</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon' />
                    <p>Developper une interface attrayante, en choisissant des couleurs, des polices et des éléments graphiques qui plaisent à l'utilisateur tout en restant fonctionnels .</p>
                  </li>
                  
              </ul>
          </article>
          <article className="service">
              <div className="service__head">
                <h3>Web Development</h3>
              </div>

              <ul className='service__list'>
                  <li>
                    <BiCheck className='service__list-icon' />
                    <p>Comprendre les besoins des utilisateurs en réalisant des interviews et des sondages pour savoir ce qu'ils recherchent dans une application .</p>
                  </li>
                  <li>
                    <BiCheck className='service__list-icon' />
                    <p>Collaborer avec les développeurs pour s'assurer le site est implémenté , puis réceuillir des retours d"expérience aprés le lancement pour continuer à améliorer l'application .</p>
                  </li>
                  
              </ul>
          </article>
          
       </div>
    </section>
  )
}

export default Services