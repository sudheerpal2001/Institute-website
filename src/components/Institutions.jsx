import React, { useState } from 'react';
import { GraduationCap, Scale, BookOpen, School, Building2, Library, ChevronRight, X, MapPin, Phone, Mail, Globe } from 'lucide-react';

const institutions = [
  {
    name: "Dr. Rizvi College of Engineering",
    description: "Approved by AICTE, New Delhi & affiliated to AKTU, Lucknow",
    icon: GraduationCap,
    courses: "B.Tech, MBA, Polytechnic Diploma",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    accentColor: "bg-blue-600",

    // --- Modal Details ---
    code: "College Code: 310",
    address: "Karari, Kaushambi (U.P.) — 212206",
    intro: "Rizvi Group offers four-year (full time) AICTE approved B.Tech programmes in relevant engineering branches, along with a two-year (full time) MBA programme and 3-year Polytechnic Diploma.",
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
        label: "Master of Business Administration (MBA)",
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
  {
    name: "Dr. Rizvi College of Law",
    description: "Affiliated to Prof. Rajendra Singh University & Approved by BCI",
    icon: Scale,
    courses: "LL.B. (3 Year)",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    accentColor: "bg-purple-600",
    code: "",
    address: "Karari, Kaushambi (U.P.) — 212206",
    intro: "Dr. Rizvi College of Law is recognized by the Bar Council of India (BCI) and offers a three-year LL.B. programme to develop skilled legal professionals.",
    sections: [
      {
        label: "Course Offered",
        courses: [{ name: "LL.B. — Bachelor of Laws (3 Years)", seats: "" }],
      },
    ],
    toll_free: "1800-200-5802",
    email: "admissions@rizvigroup.org",
    website: "",
  },
  {
    name: "Dr. Rizvi College of Education",
    description: "Approved by NCTE & affiliated to SCERT, Uttar Pradesh",
    icon: BookOpen,
    courses: "B.Ed., D.El.Ed.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    accentColor: "bg-green-600",
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
  {
    name: "Dr. A. H. Rizvi Degree College",
    description: "Affiliated to Prof. Rajendra Singh University",
    icon: Building2,
    courses: "Arts, Science & Commerce",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    accentColor: "bg-orange-600",
    code: "",
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
  {
    name: "Dr. Rizvi Springfield School",
    description: "Affiliated to CBSE, New Delhi (10+2 Level)",
    icon: School,
    courses: "English Medium School",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    accentColor: "bg-red-600",
    code: "",
    address: "Karari, Kaushambi (U.P.) — 212206",
    intro: "Dr. Rizvi Springfield School is an English medium school affiliated to CBSE, New Delhi, offering classes from primary level up to 10+2 in a nurturing campus environment.",
    sections: [
      {
        label: "School Details",
        courses: [
          { name: "English Medium — Classes I to XII (CBSE)", seats: "" },
          { name: "Science, Commerce & Arts streams (XI-XII)", seats: "" },
        ],
      },
    ],
    toll_free: "1800-200-5802",
    email: "admissions@rizvigroup.org",
    website: "",
  },
  {
    name: "Dr. Rizvi Learner's Academy",
    description: "Affiliated to CBSE, New Delhi (10+2 Level)",
    icon: Library,
    courses: "English Medium School",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    accentColor: "bg-teal-600",
    code: "",
    address: "Karari, Kaushambi (U.P.) — 212206",
    intro: "Dr. Rizvi Learner's Academy is a CBSE affiliated English medium school focused on holistic development and academic excellence from an early age.",
    sections: [
      {
        label: "School Details",
        courses: [
          { name: "English Medium — Classes I to XII (CBSE)", seats: "" },
          { name: "Science, Commerce & Arts streams (XI-XII)", seats: "" },
        ],
      },
    ],
    toll_free: "1800-200-5802",
    email: "admissions@rizvigroup.org",
    website: "",
  },
];

// ─── Modal Component ───────────────────────────────────────────────
const InstitutionModal = ({ inst, onClose }) => {
  if (!inst) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header strip */}
        <div className={`${inst.accentColor} h-2 rounded-t-2xl`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-6">
          {/* Icon + Title */}
          <div className={`inline-flex p-3 rounded-xl ${inst.bgColor} mb-4`}>
            <inst.icon className={`h-7 w-7 ${inst.iconColor}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{inst.name}</h3>
          <p className="text-sm text-gray-500 mb-1">{inst.description}</p>
          {inst.code && (
            <span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-3">
              {inst.code}
            </span>
          )}
          <p className="text-gray-600 text-sm leading-relaxed mt-2 mb-5">{inst.intro}</p>

          {/* Courses */}
          {inst.sections.map((section, si) => (
            <div key={si} className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
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

          {/* Contact Info */}
          <div className="mt-5 bg-gray-50 rounded-xl p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Contact</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{inst.address}</span>
            </div>
            {inst.toll_free && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-gray-400 shrink-0" />
                <a href={`tel:${inst.toll_free.replace(/-/g, '')}`} className="hover:text-primary transition">
                  Toll Free: {inst.toll_free}
                </a>
              </div>
            )}
            {inst.email && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                <a href={`mailto:${inst.email}`} className="hover:text-primary transition">
                  {inst.email}
                </a>
              </div>
            )}
            {inst.website && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="h-4 w-4 text-gray-400 shrink-0" />
                <a href={`https://${inst.website}`} target="_blank" rel="noreferrer" className="hover:text-primary transition">
                  {inst.website}
                </a>
              </div>
            )}
          </div>

          {/* Footer note
          <p className="text-xs text-gray-400 mt-4 text-center">
            📍 Located in Karari, Kaushambi — ~45 km from Allahabad. Wi-Fi campus with own transport.
          </p> */}
        </div>
      </div>
    </div>
  );
};

// ─── Main Section ──────────────────────────────────────────────────
const Institutions = () => {
  const [selectedInst, setSelectedInst] = useState(null);

  return (
    <section id="institutions" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Institutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Centers of Academic Excellence</h2>
          <p className="text-gray-600">Diverse educational opportunities under one roof, catering to various disciplines and aspirations.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((inst, idx) => (
            <div
              key={idx}
              className={`${inst.bgColor} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div className="inline-flex p-3 rounded-xl bg-white shadow-md mb-4">
                <inst.icon className={`h-6 w-6 ${inst.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{inst.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{inst.description}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                <span className="text-xs font-medium text-gray-500">{inst.courses}</span>
                <button
                  onClick={() => setSelectedInst(inst)}
                  className="cursor-pointer text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedInst && (
        <InstitutionModal inst={selectedInst} onClose={() => setSelectedInst(null)} />
      )}
    </section>
  );
};

export default Institutions;
