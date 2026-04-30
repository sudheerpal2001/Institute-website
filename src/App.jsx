import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Institutions from './components/Institutions';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Notice from './components/Notice';
import CampusAndStats from './components/CampusAndStats';
import OtherInstitutions from "./components/OtherInstitutions";
import Downloads from "./components/Downloads";
import Gallery from './components/Gallery';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'institutions', 'news', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <Notice/>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Institutions />
        <CampusAndStats/>
        <Gallery/>
        <News />
        <OtherInstitutions />
      <Downloads />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;