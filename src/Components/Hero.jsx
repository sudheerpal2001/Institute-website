import React, { useState } from 'react';
import { ArrowRight, Award, Users, Building2, X, Download, Phone, Mail, Globe, MapPin, FileText } from 'lucide-react';

const brochures = [
  {
    title: "Engineering & Management",
    subtitle: "B.Tech (CS, CE, EC, EN, ME) • MBA • Polytechnic Diploma",
    icon: "🎓",
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
    url: "https://www.rizvigroup.org/downloads/engineeringCollege_Prospectous.pdf",
  },
  {
    title: "Degree College",
    subtitle: "B.A. • B.Sc. • B.Com.",
    icon: "🏛️",
    color: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
    url: "https://www.rizvigroup.org/downloads/degreeCollege_Prospectous.pdf",
  },
  {
    title: "B.Ed. & D.El.Ed.",
    subtitle: "Bachelor of Education • Diploma in Elementary Education",
    icon: "📖",
    color: "bg-green-50",
    iconBg: "bg-green-100",
    iconText: "text-green-600",
    badgeColor: "bg-green-100 text-green-700",
    url: "https://www.rizvigroup.org/downloads/degreeCollege_Prospectous.pdf",
  },
  {
    title: "Law College",
    subtitle: "LL.B. — Bachelor of Laws (3 Years)",
    icon: "⚖️",
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
    url: "https://www.rizvigroup.org/downloads/lawCollege_Prospectous.pdf",
  },
  {
    title: "Springfield School",
    subtitle: "CBSE English Medium • Classes I–XII",
    icon: "🏫",
    color: "bg-red-50",
    iconBg: "bg-red-100",
    iconText: "text-red-600",
    badgeColor: "bg-red-100 text-red-700",
    url: "https://www.rizvigroup.org/downloads/springfieldSchool_Prospectous.pdf",
  },
  {
    title: "Learner's Academy",
    subtitle: "CBSE English Medium • Classes I–XII",
    icon: "📚",
    color: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconText: "text-teal-600",
    badgeColor: "bg-teal-100 text-teal-700",
    url: "https://www.rizvigroup.org/downloads/learners_Prospectous.pdf",
  },
];

// ─── Download Modal ─────────────────────────────────────────────────
const DownloadModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent strip */}
        <div className="h-2 rounded-t-2xl bg-gradient-to-r from-primary to-secondary" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-2.5 rounded-xl">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Downloads</h3>
              <p className="text-sm text-gray-500">Information brochures of all institutions</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-5 mt-3">
            Download the information brochure of your preferred institution below. For any queries, feel free to contact us.
          </p>

          {/* Brochure Cards */}
          <div className="space-y-3 mb-6">
            {brochures.map((b, i) => (
              <div
                key={i}
                className={`${b.color} rounded-xl p-4 flex items-center justify-between gap-3`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${b.iconBg} rounded-lg p-2 text-lg leading-none`}>
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{b.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{b.subtitle}</p>
                  </div>
                </div>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition hover:opacity-80 ${b.badgeColor}`}
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Contact Us</p>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
              <span>Rizvi Educational Campus, Karari, Kaushambi (U.P.) — 212 206</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-gray-400 shrink-0" />
              <span>
                Toll Free:{' '}
                <a href="tel:18002005802" className="hover:text-primary transition font-medium">
                  1800-200-5802
                </a>
                {' '}| <a href="tel:7080205252" className="hover:text-primary transition font-medium">
                  7080205252
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4 text-gray-400 shrink-0" />
              <a href="mailto:contactus@drce.org" className="hover:text-primary transition">
                contactus@drce.org
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="h-4 w-4 text-gray-400 shrink-0" />
              <a href="https://www.drce.org" target="_blank" rel="noreferrer" className="hover:text-primary transition">
                www.drce.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Hero Section ───────────────────────────────────────────────────
const Hero = () => {
  const [showDownload, setShowDownload] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Registration Open 2025-26
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Shaping Futures Since{' '}
              <span className="text-primary relative inline-block">
                1985
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4 L200 4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-accent" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Empowering minds through quality education across Engineering, Law, Education, and Schools. Spread over 30 acres of lush green campus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-primary text-black border-2 border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-primary/90 flex items-center justify-center gap-2 group"
              >
                Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </button>
              <button
                onClick={() => setShowDownload(true)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-primary hover:text-primary transition flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-10 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Award className="h-7 w-7 text-primary" />
                <div>
                  <p className="font-bold text-gray-900">AICTE Approved</p>
                  <p className="text-xs text-gray-500">All Programs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-7 w-7 text-primary" />
                <div>
                  <p className="font-bold text-gray-900">5000+ Students</p>
                  <p className="text-xs text-gray-500">Alumni Network</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-7 w-7 text-primary" />
                <div>
                  <p className="font-bold text-gray-900">30 Acres</p>
                  <p className="text-xs text-gray-500">Campus Area</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Campus View"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">Dr. Rizvi College of Engineering</p>
                  <p className="text-white/80 text-sm">Approved by AICTE | Affiliated to AKTU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      {showDownload && <DownloadModal onClose={() => setShowDownload(false)} />}
    </section>
  );
};

export default Hero;
