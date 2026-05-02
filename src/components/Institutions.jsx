import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, X, ChevronRight } from 'lucide-react';

const institutions = [
  {
    name: "Dr. Rizvi College of Engineering & Management",
    affiliation: "AICTE Approved · AKTU, Lucknow · Code: 310",
    image: "/Images/Engineering.jpg",
    courses: ["B.Tech (CS)", "B.Tech (CE)", "B.Tech (EC)", "B.Tech (ME)", "MBA", "Polytechnic"],
    website: { url: "http://www.drce.org", label: "www.drce.org" },
    accentClass: "from-indigo-500 to-indigo-700",
    modal: {
      code: "College Code: 310",
      address: "Karari, Kaushambi (U.P.) — 212206",
      intro: "Rizvi Group offers four-year AICTE approved B.Tech programmes in relevant engineering branches, along with a two-year MBA programme and 3-year Polytechnic Diploma.",
      sections: [
        {
          label: "Bachelor of Technology (B.Tech)",
          courses: [
            { name: "Computer Science (CS)", seats: "60 Seats" },
            { name: "Civil Engineering (CE)", seats: "60 Seats" },
            { name: "Electronics & Communication (EC)", seats: "60 Seats" },
            { name: "Electrical & Electronics (EN)", seats: "60 Seats" },
            { name: "Mechanical Engineering (ME)", seats: "60 Seats" },
          ],
        },
        {
          label: "Master of Business Administration",
          courses: [{ name: "MBA (Full Time, 2 Years)", seats: "" }],
        },
        {
          label: "Polytechnic Diploma (3 Years)",
          courses: [
            { name: "Mechanical Production", seats: "60 Seats" },
            { name: "Electrical & Electronics Engineering", seats: "" },
          ],
        },
      ],
      toll_free: "1800-200-5802",
      email: "contactus@drce.org",
      website: "www.drce.org",
    },
  },
  {
    name: "Dr. Rizvi College of Law",
    affiliation: "BCI Approved · Rajju Bhaiya University · Code: 03060",
    image: "/Images/Hero-image.jpeg",
    courses: ["LL.B. (3 Years)", "BA.LLB (5 Years)"],
    website: { url: "http://rizvilaw.in", label: "rizvilaw.in" },
    accentClass: "from-indigo-500 to-indigo-700",
    modal: {
      code: "College Code: 03060",
      address: "Karari, Kaushambi (U.P.) — 212206",
      intro: "Dr. Rizvi College of Law is recognized by the Bar Council of India (BCI) and offers LLB programmes to develop skilled legal professionals.",
      sections: [
        {
          label: "Courses Offered",
          courses: [
            { name: "LL.B. — Bachelor of Laws (3 Years)", seats: "" },
            { name: "BA.LLB — Integrated (5 Years)", seats: "" },
          ],
        },
      ],
      toll_free: "1800-200-5802",
      email: "admissions@rizvigroup.org",
      website: "rizvilaw.in",
    },
  },
  {
    name: "Dr. Rizvi College of Education",
    affiliation: "NCTE Approved · SCERT, Uttar Pradesh",
    image: "/Images/college.jpg",
    courses: ["B.Ed.", "D.El.Ed."],
    website: { url: "http://www.rizvidegree.co.in", label: "rizvidegree.co.in" },
    accentClass: "from-indigo-500 to-indigo-700",
    modal: {
      code: "",
      address: "Karari, Kaushambi (U.P.) — 212206",
      intro: "Dr. Rizvi College of Education is approved by NCTE and is dedicated to producing highly qualified and skilled teachers through its professional education programmes.",
      sections: [
        {
          label: "Courses Offered",
          courses: [
            { name: "B.Ed. — Bachelor of Education (2 Years)", seats: "" },
            { name: "D.El.Ed. — Diploma in Elementary Education (2 Years)", seats: "" },
          ],
        },
      ],
      toll_free: "1800-200-5802",
      email: "admissions@rizvigroup.org",
      website: "",
    },
  },
  {
    name: "Dr. A. H. Rizvi Degree College",
    affiliation: "Rajju Bhaiya University · Code: 03063",
    image: "/Images/college2.jpg",
    courses: ["B.A.", "B.Sc.", "B.Com."],
    website: { url: "http://www.rizvidegree.co.in", label: "rizvidegree.co.in" },
    accentClass: "from-indigo-500 to-indigo-700",
    modal: {
      code: "College Code: 03063",
      address: "Karari, Kaushambi (U.P.) — 212206",
      intro: "Dr. A.H. Rizvi Degree College offers undergraduate programmes in Arts, Science, and Commerce streams, providing a strong academic foundation for students.",
      sections: [
        {
          label: "Streams Offered",
          courses: [
            { name: "Bachelor of Arts (B.A.)", seats: "" },
            { name: "Bachelor of Science (B.Sc.)", seats: "" },
            { name: "Bachelor of Commerce (B.Com.)", seats: "" },
          ],
        },
      ],
      toll_free: "1800-200-5802",
      email: "admissions@rizvigroup.org",
      website: "",
    },
  },
  {
    name: "Dr. Rizvi Springfield School",
    affiliation: "CBSE Affiliated · New Delhi · Karari, Kaushambi",
    image: "/Images/college3.jpg",
    courses: ["Classes I–XII", "CBSE"],
    website: { url: "http://www.drsf.co.in", label: "drsf.co.in" },
    accentClass: "from-indigo-500 to-indigo-700",
    modal: {
      code: "",
      address: "Karari, Kaushambi (U.P.) — 212206",
      intro: "Dr. Rizvi Springfield School is a CBSE affiliated English medium school offering classes from primary level up to 10+2 in a nurturing campus environment.",
      sections: [
        {
          label: "School Details",
          courses: [
            { name: "English Medium — Classes I to XII (CBSE)", seats: "" },
            { name: "Science, Commerce & Arts streams (XI–XII)", seats: "" },
          ],
        },
      ],
      toll_free: "1800-200-5802",
      email: "admissions@rizvigroup.org",
      website: "drsf.co.in",
    },
  },
  {
    name: "Dr. Rizvi Learners' Academy",
    affiliation: "CBSE Affiliated · Jaunpur, Uttar Pradesh",
    image: "/Images/learner-academy.jpg",
    courses: ["Classes I–XII", "CBSE"],
    website: { url: "http://www.rlajnp.co.in", label: "rlajnp.co.in" },
    accentClass: "from-indigo-500 to-indigo-700",
    modal: {
      code: "",
      address: "Jaunpur, Uttar Pradesh",
      intro: "Dr. Rizvi Learner's Academy is a CBSE affiliated English medium school focused on holistic development and academic excellence from an early age.",
      sections: [
        {
          label: "School Details",
          courses: [
            { name: "English Medium — Classes I to XII (CBSE)", seats: "" },
            { name: "Science, Commerce & Arts streams (XI–XII)", seats: "" },
          ],
        },
      ],
      toll_free: "1800-200-5802",
      email: "admissions@rizvigroup.org",
      website: "rlajnp.co.in",
    },
  },
];

// ─── Modal ─────────────────────────────────────────────────────────
const InstitutionModal = ({ inst, onClose }) => {
  if (!inst) return null;
  const m = inst.modal;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top bar */}
        <div className={`h-1.5 rounded-t-2xl bg-gradient-to-r ${inst.accentClass}`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-blue-00 rounded-full p-1.5 transition-colors"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-6">
          <img
            src={inst.image}
            alt={inst.name}
            className="w-14 h-14 object-cover rounded-lg mb-3"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-1">{inst.name}</h3>
          <p className="text-xs text-indigo-600 font-semibold mb-2">{inst.affiliation}</p>
          {m.code && (
            <span className="inline-block text-xs font-medium bg-gray-100 text-gray-500 px-3 py-1 rounded-full mb-3">
              {m.code}
            </span>
          )}
          <p className="text-sm text-gray-600 leading-relaxed mt-2 mb-5">{m.intro}</p>

          {/* Sections */}
          {m.sections.map((section, si) => (
            <div key={si} className="mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
                {section.label}
              </p>
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                {section.courses.map((course, ci) => (
                  <div
                    key={ci}
                    className={`flex justify-between items-center px-4 py-2.5 text-sm ${
                      ci !== section.courses.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <span className="text-gray-700">{course.name}</span>
                    {course.seats && (
                      <span className="text-xs text-gray-400 font-medium ml-3 whitespace-nowrap">
                        {course.seats}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="mt-5 bg-gray-50 rounded-xl p-4 space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Contact
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
              <span>{m.address}</span>
            </div>
            {m.toll_free && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                
                <a  href={`tel:${m.toll_free.replace(/-/g, '')}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Toll Free: {m.toll_free}
                </a>
              </div>
            )}
            {m.email && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                <a href={`mailto:${m.email}`} className="hover:text-indigo-600 transition-colors">
                  {m.email}
                </a>
              </div>
            )}
            {m.website && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="h-4 w-4 text-gray-400 shrink-0" />
                
                  < a href={`https://${m.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600 transition-colors"
                >
                  {m.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Section ──────────────────────────────────────────────────
const Institutions = () => {
  const [selectedInst, setSelectedInst] = useState(null);

  return (
    <section id="institutions" className="bg-[var(--bg-surface,#f8fafc)] py-20 px-[5%]">

      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-6 mb-6">
        <div>
          <div className="text-md font-bold uppercase tracking-widest text-indigo-600 mb-1">
            Our Institutions
          </div>
          <h2 className="text-5xl font-bold text-black mb-2">Schools &amp; Colleges</h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700" />
        </div>
        
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {institutions.map((inst, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-gray-200 rounded-[18px] overflow-hidden
              transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
              hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]
              group"
          >
            {/* ✅ FIX: z-20 taaki image ke upar rahe */}
            <div
              className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${inst.accentClass}
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20`}
            />

            {/* Card Image */}
            <img
              src={inst.image}
              alt={inst.name}
              className="w-full h-44 object-cover"
            />

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Card Body */}
            <div className="relative z-10 p-8">
              <div className="text-[1.1rem] font-bold text-gray-900 leading-snug mb-1">
                {inst.name}
              </div>
              <div className="text-[0.71rem] font-semibold text-indigo-600 leading-snug mb-3">
                {inst.affiliation}
              </div>

              {/* Course tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {inst.courses.map((c, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-600 border border-indigo-100 text-[0.68rem] font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between flex-wrap gap-2 mt-2">
                
                 <a href={inst.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 text-[0.8rem] font-semibold
                    transition-all duration-300 hover:gap-2"
                >
                  Visit Website →
                </a>

                <button
                  onClick={() => setSelectedInst(inst)}
                  className="inline-flex items-center gap-1 text-[0.8rem] font-semibold text-indigo-600
                    bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1
                    hover:bg-indigo-600 hover:text-white hover:border-indigo-600
                    transition-all duration-250 cursor-pointer"
                >
                  Read More <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedInst && (
        <InstitutionModal inst={selectedInst} onClose={() => setSelectedInst(null)} />
      )}
    </section>
  );
};

export default Institutions;