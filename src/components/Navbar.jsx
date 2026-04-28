import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'institutions', label: 'Institution' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white shadow-md py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">Rizvi Group</h1>
              <p className="text-xs text-gray-500 -mt-1">of Institutions</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative cursor-pointer px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute cursor-pointer bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <a href="tel:18002005802" className="bg-primary text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition shadow-md">
              Call Now: 1800-200-5802
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-2 py-2 text-base ${
                  activeSection === item.id ? 'text-primary font-semibold' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href="tel:18002005802" className="block bg-primary text-black  text-center px-4 py-2 rounded-full">
              Call 1800-200-5802
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;