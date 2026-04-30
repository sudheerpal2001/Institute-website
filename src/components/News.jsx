import React, { useEffect, useRef, useState } from 'react';

// ─── News Data ─────────────────────────────────────────────────────
const newsItems = [
  {
    tag: "Admissions 2025",
    title: "Registrations Open for Academic Session 2025–26",
    desc: "Applications are now open across all programs — B.Tech, LLB, B.Ed., B.A., B.Sc., and B.Com. Fill in the online enquiry form or call our toll-free number for assistance.",
    linkLabel: "Apply Now →",
    linkHref: "https://forms.gle/UfrdXMKE1wKckco6A",
    external: true,
  },
  {
    tag: "Infrastructure",
    title: "New Digital Classrooms & Labs Inaugurated on Campus",
    desc: "State-of-the-art laboratories, smart classrooms, and an expanded library have been added to the Karari campus, significantly enhancing the learning experience.",
    linkLabel: "Know More →",
    linkHref: "#newsletter",
    external: false,
  },
  {
    tag: "Scholarships",
    title: "Merit Scholarships Available for New Academic Year",
    desc: "Rizvi Group offers merit-based scholarships for academically excellent students joining engineering, law, and degree programs. Contact the admissions office for eligibility.",
    linkLabel: "Contact Us →",
    linkHref: "#newsletter",
    external: false,
  },
];

// ─── Reveal Hook ───────────────────────────────────────────────────
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

// ─── Reveal Wrapper ────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────
const News = () => {
  return (
    <section
      id="news"
      className="pb-10 px-[5%]"
      style={{ background: 'var(--bg-surface, #f8fafc)' }}
    >
      {/* Header */}
      <Reveal>
        <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">
          Latest Updates
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">News &amp; Announcements</h2>
        <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700" />
      </Reveal>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {newsItems.map((item, idx) => {
          const delays = [100, 200, 300];
          return (
            <Reveal key={idx} delay={delays[idx]}>
              <div
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden
                  shadow-[0_1px_3px_rgba(0,0,0,0.07)]
                  transition-all duration-350
                  hover:-translate-y-[5px] hover:border-indigo-200
                  hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]
                  group h-full flex flex-col"
              >
                {/* Top accent bar */}
                <div className="h-[4px] bg-gradient-to-r from-indigo-500 to-indigo-700 flex-shrink-0" />

                {/* Body */}
                <div className="p-[1.6rem] flex flex-col flex-1">
                  <span
                    className="inline-block text-[0.63rem] font-bold tracking-[2px] uppercase
                      text-indigo-600 bg-indigo-50 border border-indigo-100
                      px-[0.6rem] py-[0.2rem] rounded-[3px] mb-[0.8rem] w-fit"
                  >
                    {item.tag}
                  </span>

                  <div
                    className="text-[1.05rem] font-semibold leading-[1.4] text-gray-900
                      mb-[0.8rem] font-[Poppins,serif]"
                  >
                    {item.title}
                  </div>

                  <p className="text-[0.82rem] text-gray-500 leading-[1.7] flex-1">
                    {item.desc}
                  </p>

                  <a
                    href={item.linkHref}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-[0.78rem] font-semibold
                      text-indigo-600 mt-[1.1rem] transition-[gap] duration-300
                      hover:gap-2 w-fit"
                  >
                    {item.linkLabel}
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default News;
