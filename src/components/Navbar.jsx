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
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'institutions', label: 'INSTITUTIONS' },
    { id: 'news', label: 'NEWS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white shadow-md py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-evenly gap-15 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src="/Images/logo.jpeg" alt="" className='h-10 w-10' />
            <div>
              <h1 className="text-xl font-bold text-blue-700">Dr. Rizvi Group</h1>
              <p className="text-sm text-gray-500 -mt-1">of Institutions</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative cursor-pointer px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute cursor-pointer bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7dF_JQTOO8dLATLP15WIZH5pI4ubGFxw0cech7rqFBzFQNw/viewform" className="bg-blue-500 text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-white transition border hover:text-blue-500 border-blue-500">
              Register Now
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
                  activeSection === item.id ? 'text-blue-400 font-semibold' : 'text-gray-600'
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