import React, { useState } from 'react';
import { Calendar, ChevronRight, BookOpen, Users, Award, ExternalLink, X, MapPin, Phone, Mail, Clock } from 'lucide-react';

const newsItems = [
  {
    title: "Registration Open for Session 2025-26",
    date: "March 15, 2025",
    description: "Admissions now open for all courses across Engineering, Law, Education, and Degree Colleges.",
    icon: BookOpen,
    type: "announcement",
    // --- Modal Details ---
    fullContent: `We are pleased to announce that admissions for the academic session 2025-26 are now open across all institutions under the Dr. Akhtar Rizvi Educational Trust. Students can apply for B.Tech, MBA, LL.B., B.Ed., D.El.Ed., and Degree College programmes.`,
    highlights: [
      "B.Tech — 5 Branches (CS, CE, EC, EN, ME) — 60 Seats each",
      "MBA — Master of Business Administration (2 Years)",
      "LL.B. — Bachelor of Laws (3 Years)",
      "B.Ed. & D.El.Ed. — Teacher Training Programmes",
      "Polytechnic Diploma — Mechanical & Electrical (3 Years)",
      "Degree College — B.A., B.Sc., B.Com.",
    ],
    eligibility: "Students who have passed 10+2 (or equivalent) are eligible for UG programmes. Graduation required for MBA & LL.B.",
    lastDate: "June 30, 2025",
    contact: {
      phone: "1800-200-5802",
      email: "admissions@rizvigroup.org",
      address: "Karari, Kaushambi (U.P.) — 212206",
    },
  },
  {
    title: "Campus Placement Drive 2025",
    date: "February 28, 2025",
    description: "Top recruiters visiting campus for final year students. Registration deadline approaching.",
    icon: Users,
    type: "event",
    fullContent: `The annual Campus Placement Drive 2025 is set to begin at Rizvi Educational Campus. Final year students of B.Tech, MBA, and Diploma programmes are encouraged to register at the earliest. Several leading companies from IT, Core Engineering, and Management sectors will be participating.`,
    highlights: [
      "Companies from IT, Core Engineering & Management sectors",
      "On-campus interviews and aptitude tests",
      "Pre-placement talks and company presentations",
      "Resume building and mock interview sessions available",
      "Eligible: Final year B.Tech, MBA & Diploma students",
    ],
    eligibility: "Final year students with minimum 60% aggregate marks and no active backlogs are eligible.",
    lastDate: "Registration closes: March 10, 2025",
    contact: {
      phone: "1800-200-5802",
      email: "placements@rizvigroup.org",
      address: "Placement Cell, Rizvi Educational Campus, Karari, Kaushambi",
    },
  },
  {
    title: "National Seminar on Legal Reforms",
    date: "February 10, 2025",
    description: "Dr. Rizvi College of Law organizes seminar with eminent jurists and legal experts.",
    icon: Award,
    type: "achievement",
    fullContent: `Dr. Rizvi College of Law successfully organized a National Seminar on "Contemporary Legal Reforms in India" featuring eminent jurists, legal practitioners, and academicians from across the country. The event focused on new criminal laws, digital jurisprudence, and constitutional developments.`,
    highlights: [
      "Topic: Contemporary Legal Reforms in India",
      "Keynote by eminent jurists and High Court advocates",
      "Panel discussion on new criminal laws (BNS, BNSS, BSA)",
      "Student moot court competition held alongside",
      "Certificate of participation for all attendees",
    ],
    eligibility: "Open to all law students, faculty, and legal professionals.",
    lastDate: "Event concluded — February 10, 2025",
    contact: {
      phone: "1800-200-5802",
      email: "law@rizvigroup.org",
      address: "Dr. Rizvi College of Law, Karari, Kaushambi (U.P.)",
    },
  },
];

const typeStyles = {
  announcement: {
    badge: "bg-primary/10 text-primary",
    icon: "bg-primary/10",
    iconText: "text-primary",
    accent: "from-primary to-blue-400",
    highlightDot: "bg-primary",
  },
  event: {
    badge: "bg-secondary/10 text-secondary",
    icon: "bg-secondary/10",
    iconText: "text-secondary",
    accent: "from-secondary to-teal-400",
    highlightDot: "bg-secondary",
  },
  achievement: {
    badge: "bg-accent/10 text-accent",
    icon: "bg-accent/10",
    iconText: "text-accent",
    accent: "from-accent to-yellow-400",
    highlightDot: "bg-accent",
  },
};

// ─── Modal ──────────────────────────────────────────────────────────
const NewsModal = ({ news, onClose }) => {
  if (!news) return null;
  const styles = typeStyles[news.type];

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
        <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${styles.accent}`} />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-6">
          {/* Type badge + date */}
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize ${styles.badge}`}>
              {news.type}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {news.date}
            </span>
          </div>

          {/* Icon + Title */}
          <div className={`inline-flex p-2.5 rounded-xl ${styles.icon} mb-3`}>
            <news.icon className={`h-6 w-6 ${styles.iconText}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>

          {/* Full content */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5">{news.fullContent}</p>

          {/* Highlights */}
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Key Highlights</p>
          <ul className="space-y-2 mb-5">
            {news.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${styles.highlightDot}`} />
                {point}
              </li>
            ))}
          </ul>

          {/* Eligibility & Last Date */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Eligibility</p>
              <p className="text-xs text-gray-600 leading-relaxed">{news.eligibility}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 flex items-center gap-1">
                <Clock className="h-3 w-3" /> Important Date
              </p>
              <p className="text-xs text-gray-600">{news.lastDate}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Contact</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{news.contact.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-gray-400 shrink-0" />
              <a href={`tel:${news.contact.phone}`} className="hover:text-primary transition">
                Toll Free: {news.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4 text-gray-400 shrink-0" />
              <a href={`mailto:${news.contact.email}`} className="hover:text-primary transition">
                {news.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Section ───────────────────────────────────────────────────
const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">News & Announcements</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => {
            const styles = typeStyles[news.type];
            return (
              <div key={idx} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${styles.accent}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium capitalize ${styles.badge}`}>
                      {news.type}
                    </span>
                  </div>
                  <div className={`inline-flex p-2 rounded-lg ${styles.icon} mb-4`}>
                    <news.icon className={`h-5 w-5 ${styles.iconText}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <button
                    onClick={() => setSelectedNews(news)}
                    className="text-primary cursor-pointer font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">Toll Free No:</span> 1800-200-5802 &nbsp;|&nbsp;
            <span className="font-semibold">For Admission Enquiry:</span>{' '}
            <a href="mailto:admissions@rizvigroup.org" className="text-primary hover:underline">
              admissions@rizvigroup.org
            </a>
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedNews && (
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </section>
  );
};

export default News;
