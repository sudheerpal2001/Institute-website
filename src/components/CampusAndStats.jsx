import React, { useEffect, useRef, useState } from 'react';

// ─── Campus Facilities Data ────────────────────────────────────────
const facilities = [
  {
    icon: "📡",
    title: "Wi-Fi Campus",
    desc: "Entire 30-acre campus covered with high-speed Wi-Fi for seamless digital connectivity and e-learning.",
  },
  {
    icon: "🏨",
    title: "Boys' Hostel",
    desc: "In-campus hostel accommodating 500+ students with furnished rooms, mess, and 24×7 security.",
  },
  {
    icon: "🏠",
    title: "Girls' Hostel",
    desc: "Safe and comfortable in-campus accommodation for girl students with dedicated wardens and security.",
  },
  {
    icon: "🚌",
    title: "Transport",
    desc: "Daily pick-up and drop service from Allahabad city, approximately 45 km from campus.",
  },
  {
    icon: "🌿",
    title: "Lush Green Campus",
    desc: "Sprawling lawns, playgrounds, and tree-lined paths across 30 acres in a tranquil rural setting.",
  },
  {
    icon: "👨‍🏫",
    title: "Faculty Residences",
    desc: "On-campus residential flats for teaching staff ensure accessible and dedicated faculty.",
  },
];

// ─── Stats Data ────────────────────────────────────────────────────
const stats = [
  { target: 40, suffix: "+", label: "Years of Legacy" },
  { target: 30, suffix: "",  label: "Acre Campus" },
  { target: 15, suffix: "+", label: "Institutions" },
  { target: 500, suffix: "+", label: "Hostel Seats" },
];

// ─── Hook: Intersection Observer ───────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// ─── Animated Counter ──────────────────────────────────────────────
const Counter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

// ─── Reveal Wrapper ────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, className = "" }) => {
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
const CampusAndStats = () => {
  const [statsRef, statsInView] = useInView();

  return (
    <>
      {/* ── Campus Section ── */}
      <section
        id="campus"
        className="py-5 px-[5%]"
        style={{ background: 'var(--bg-base, #f1f5f9)' }}
      >
        {/* Header */}
        <Reveal className="text-center mb-6">
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">
            Campus Life
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">World-Class Facilities</h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 mx-auto mb-4" />
          <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            Our sprawling 30-acre campus is designed to nurture students holistically — academically,
            socially, and personally.
          </p>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, idx) => {
            const delays = [100, 200, 300, 100, 200, 300];
            return (
              <Reveal key={idx} delay={delays[idx]}>
                <div
                  className="relative bg-white border border-gray-200 rounded-2xl px-7 py-9 text-center
                    overflow-hidden transition-all duration-350
                    hover:-translate-y-[5px] hover:border-indigo-200
                    hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]
                    group h-full"
                >
                  {/* Bottom accent bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]
                      bg-gradient-to-r from-indigo-500 to-indigo-700
                      scale-x-0 group-hover:scale-x-100
                      transition-transform duration-400 origin-center"
                  />

                  <div className="text-[2.2rem] mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-indigo-600 text-[1.05rem] mb-2 font-[Poppins,serif]">
                    {item.title}
                  </h4>
                  <p className="text-[0.82rem] text-gray-500 leading-[1.7]">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <div
        ref={statsRef}
        className="relative py-17 px-[5%] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #ede9fe 100%)' }}
      >
        {/* ── Animated SVG Background ── */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Dot grid */}
            <pattern id="dotGridLight" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(99,102,241,0.18)" />
            </pattern>
            {/* Soft radial glow */}
            <radialGradient id="glowLight" cx="50%" cy="50%" r="55%">
              <stop offset="0%"   stopColor="rgba(165,180,252,0.35)" />
              <stop offset="100%" stopColor="rgba(165,180,252,0)" />
            </radialGradient>
          </defs>

          {/* Dot grid */}
          <rect width="100%" height="100%" fill="url(#dotGridLight)" />
          {/* Center glow */}
          <rect width="100%" height="100%" fill="url(#glowLight)" />

          {/* Large soft blobs */}
          <circle cx="5%"  cy="50%" r="140" fill="rgba(199,210,254,0.45)" style={{ animation: 'floatA 10s ease-in-out infinite' }} />
          <circle cx="95%" cy="30%" r="160" fill="rgba(196,181,253,0.35)" style={{ animation: 'floatB 13s ease-in-out infinite' }} />
          <circle cx="50%" cy="100%" r="120" fill="rgba(165,180,252,0.3)" style={{ animation: 'floatA 9s ease-in-out infinite reverse' }} />
          <circle cx="80%" cy="85%" r="90"  fill="rgba(221,214,254,0.5)" style={{ animation: 'floatB 11s ease-in-out infinite' }} />

          {/* Thin rings */}
          <circle cx="15%" cy="25%" r="60" fill="none" stroke="rgba(99,102,241,0.12)" strokeWidth="1.5" style={{ animation: 'floatA 12s ease-in-out infinite' }} />
          <circle cx="85%" cy="70%" r="80" fill="none" stroke="rgba(139,92,246,0.1)"  strokeWidth="1.5" style={{ animation: 'floatB 15s ease-in-out infinite' }} />
          <circle cx="50%" cy="20%" r="45" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1"   style={{ animation: 'floatA 8s ease-in-out infinite reverse' }} />

          {/* Diagonal lines */}
          <line x1="0"   y1="0" x2="30%"  y2="100%" stroke="rgba(99,102,241,0.05)" strokeWidth="1" />
          <line x1="25%" y1="0" x2="55%"  y2="100%" stroke="rgba(99,102,241,0.05)" strokeWidth="1" />
          <line x1="50%" y1="0" x2="80%"  y2="100%" stroke="rgba(99,102,241,0.05)" strokeWidth="1" />
          <line x1="75%" y1="0" x2="105%" y2="100%" stroke="rgba(99,102,241,0.05)" strokeWidth="1" />

          {/* Twinkling dots */}
          <circle cx="30%" cy="15%" r="2.5" fill="rgba(99,102,241,0.4)"  style={{ animation: 'twinkle 3s ease-in-out infinite' }} />
          <circle cx="68%" cy="80%" r="2"   fill="rgba(139,92,246,0.35)" style={{ animation: 'twinkle 4s ease-in-out infinite 1s' }} />
          <circle cx="85%" cy="22%" r="2"   fill="rgba(99,102,241,0.3)"  style={{ animation: 'twinkle 5s ease-in-out infinite 0.5s' }} />
          <circle cx="15%" cy="72%" r="2.5" fill="rgba(139,92,246,0.4)"  style={{ animation: 'twinkle 3.5s ease-in-out infinite 2s' }} />
          <circle cx="52%" cy="30%" r="1.5" fill="rgba(99,102,241,0.35)" style={{ animation: 'twinkle 4.5s ease-in-out infinite 1.5s' }} />
        </svg>

        <style>{`
          @keyframes floatA {
            0%, 100% { transform: translate(0,0) scale(1); }
            33%       { transform: translate(14px,-20px) scale(1.04); }
            66%       { transform: translate(-9px,11px) scale(0.97); }
          }
          @keyframes floatB {
            0%, 100% { transform: translate(0,0) scale(1); }
            40%       { transform: translate(-16px,13px) scale(1.06); }
            70%       { transform: translate(11px,-9px) scale(0.96); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 1;   transform: scale(1); }
            50%       { opacity: 0.2; transform: scale(1.6); }
          }
        `}</style>

        {/* ── Stats Content ── */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {stats.map((stat, idx) => {
            const delays = [0, 100, 200, 300];
            return (
              <div
                key={idx}
                style={{
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.65s ease ${delays[idx]}ms, transform 0.65s ease ${delays[idx]}ms`,
                }}
              >
                <div
                  className="rounded-2xl px-4 py-6 border"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    borderColor: 'rgba(99,102,241,0.15)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 24px rgba(99,102,241,0.08)',
                  }}
                >
                  <div
                    className="font-[Poppins,serif] text-[2.8rem] font-bold leading-none mb-1"
                    style={{ color: '#3730a3' }}
                  >
                    <Counter target={stat.target} suffix={stat.suffix} inView={statsInView} />
                  </div>
                  <div
                    className="text-[0.72rem] font-semibold uppercase tracking-widest mt-2"
                    style={{ color: '#6366f1' }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CampusAndStats;
