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



// ─── Hero Section ───────────────────────────────────────────────────
const Hero = () => {
  const [showDownload, setShowDownload] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-2 pb-5 md:pt-6 md:pb-12 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-300 px-4 py-[6px] rounded-full text-[11px] text-blue-600 font-semibold tracking-widest uppercase mb-6 transition-all duration-700 hover:translate-y-0 translate-y-2 opacity-100">
  
                <span className="w-[7px] h-[7px] bg-blue-600 rounded-full animate-pulse"></span>
                Est. 1985 · Karari, Kaushambi, U.P.
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Shaping <span className='italic text-blue-600'>Futures</span> Since{' '}
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


            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-10 pb-4 border-b border-gray-200">
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
                <video
                  src="/Videos/HOSTELALL.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-80 md:h-[400px] object-cover rounded-2xl shadow-lg"
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
