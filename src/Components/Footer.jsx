import React from 'react';
import { GraduationCap, Heart, Phone, Mail, MapPin, Globe, Download } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Institutions', id: 'institutions' },
    { label: 'News & Events', id: 'news' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const institutions = [
    { label: 'College of Engineering', id: 'institutions' },
    { label: 'College of Law', id: 'institutions' },
    { label: 'College of Education', id: 'institutions' },
    { label: 'A.H. Rizvi Degree College', id: 'institutions' },
    { label: 'Springfield School', id: 'institutions' },
    { label: "Learner's Academy", id: 'institutions' },
  ];

  const brochures = [
    { label: 'Engineering & Management', url: 'https://www.rizvigroup.org/downloads/engineeringCollege_Prospectous.pdf' },
    { label: 'Degree College', url: 'https://www.rizvigroup.org/downloads/degreeCollege_Prospectous.pdf' },
    { label: 'B.Ed. & D.El.Ed.', url: 'https://www.rizvigroup.org/downloads/degreeCollege_Prospectous.pdf' },
    { label: 'Law College', url: 'https://www.rizvigroup.org/downloads/lawCollege_Prospectous.pdf' },
    { label: 'Springfield School', url: 'https://www.rizvigroup.org/downloads/springfieldSchool_Prospectous.pdf' },
    { label: "Learner's Academy", url: 'https://www.rizvigroup.org/downloads/learners_Prospectous.pdf' },
  ];

  const approvals = [
    'AICTE, New Delhi',
    'Bar Council of India (BCI)',
    'NCTE, Uttar Pradesh',
    'CBSE, New Delhi',
    'AKTU, Lucknow',
    'Prof. Rajendra Singh University',
    'SCERT, Uttar Pradesh',
  ];

  return (
    <footer className="bg-gray-900 text-white">

      {/* ── Top Band ── */}
      <div className="bg-primary/90 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-semibold text-sm">
            📢 Admissions Open for Session 2025-26 — Apply Now!
          </p>
          <a
            href="tel:18002005802"
            className="bg-white text-black text-sm font-bold px-5 py-1.5 rounded-full hover:bg-gray-100 transition shrink-0"
          >
            Call: 1800-200-5802
          </a>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 p-2 rounded-xl">
                <GraduationCap className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">Rizvi Group</h3>
                <p className="text-xs text-gray-400">of Institutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Dr. Akhtar Rizvi Educational Trust — a Public Charitable Trust established in 1985, committed to promoting quality education at all levels.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FaFacebook, href: '#', label: 'Facebook' },
                { Icon: FaTwitter, href: '#', label: 'Twitter' },
                { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { Icon: FaYoutube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="bg-gray-800 hover:bg-primary p-2 rounded-lg transition"
                >
                  <Icon className="h-4 w-4 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links + Institutions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition group"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary group-hover:w-2 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mt-7 mb-4">Our Institutions</h4>
            <ul className="space-y-2.5">
              {institutions.map((inst) => (
                <li key={inst.label}>
                  <button
                    onClick={() => scrollToSection(inst.id)}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition group"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent group-hover:w-2 transition-all" />
                    {inst.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Downloads + Approvals */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Download Brochures</h4>
            <ul className="space-y-2.5">
              {brochures.map((b) => (
                <li key={b.label}>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition group"
                  >
                    <Download className="h-3.5 w-3.5 text-primary shrink-0 group-hover:text-accent transition" />
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mt-7 mb-4">Approved & Affiliated</h4>
            <ul className="space-y-2">
              {approvals.map((a) => (
                <li key={a} className="text-gray-400 text-xs flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-green-400 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Rizvi Educational Campus, Karari, District Kaushambi,<br />
                  Uttar Pradesh — 212 206
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  <a href="tel:18002005802" className="block text-gray-400 hover:text-white transition">
                    Toll Free: 1800-200-5802
                  </a>
                  <a href="tel:7080205252" className="block text-gray-400 hover:text-white transition">
                    Phone: 7080205252
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  <a href="mailto:contactus@drce.org" className="block text-gray-400 hover:text-white transition">
                    contactus@drce.org
                  </a>
                  <a href="mailto:admissions@rizvigroup.org" className="block text-gray-400 hover:text-white transition">
                    admissions@rizvigroup.org
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="https://www.drce.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition"
                >
                  www.drce.org
                </a>
              </li>
            </ul>

            {/* Map Link */}
            <a
              href="https://maps.google.com/?q=Karari,Kaushambi,UttarPradesh"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs px-4 py-2 rounded-lg transition"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              View on Google Maps
            </a>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-800 py-5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {currentYear} Rizvi Group of Institutions. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 mx-0.5" /> for education
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
