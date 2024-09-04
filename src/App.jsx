import React from 'react'
import './index.css'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import './app.css';
const App = () => {
  return (
    <>
     <div className="">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact /><br />
        <Footer />
     </div>
    </>
  )
}

export default App