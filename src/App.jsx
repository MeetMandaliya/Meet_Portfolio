import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      if(sectionId.length !== 0){
      }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;
    
    sections.forEach((section) => {
      const top = section.offsetTop - 100; 
      const height = section.clientHeight;
      
      if (scrollPosition >= top && scrollPosition < top + height) {
        if(section.id.length !== 0){
          setActiveSection(section.id);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

 
  return (
    <div>
      <section id='home'>
      <Home scrollToSection={scrollToSection} activeSection={activeSection} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
