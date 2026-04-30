import React, { useEffect, useRef, useState } from 'react';

// ─── Contact Info Data ─────────────────────────────────────────────
const contactItems = [
  {
    icon: "📍",
    label: "Campus Address",
    value: (
      <>
        Rizvi Educational Campus, Karari,<br />
        Kaushambi, Uttar Pradesh – 212 206
      </>
    ),
  },
  {
    icon: "☎️",
    label: "Toll Free",
    value: <a href="tel:18002005802">1800-200-5802</a>,
  },
  {
    icon: "📞",
    label: "Direct Phone",
    value: (
      <>
        <a href="tel:7080205245">7080205245</a>,{" "}
        <a href="tel:7080205246">7080205246</a>,{" "}
        <a href="tel:7080205252">7080205252</a>
      </>
    ),
  },
  {
    icon: "✉️",
    label: "Email",
    value: <a href="mailto:contactus@drce.org">contactus@drce.org</a>,
  },
  {
    icon: "🗺️",
    label: "Location",
    value: (
      <>
        ~45 km from Allahabad Railway Station<br />
        on Allahabad–Sirathu Road
      </>
    ),
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
      { threshold: 0.12 }
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
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [btnState, setBtnState] = useState('idle'); // idle | error | success

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setBtnState('error');
      setTimeout(() => setBtnState('idle'), 2500);
      return;
    }
    setBtnState('success');
    setTimeout(() => {
      setBtnState('idle');
      setForm({ name: '', email: '', phone: '', course: '', message: '' });
    }, 4000);
  };

  const btnConfig = {
    idle:    { text: 'Send Message →',                      bg: 'from-indigo-500 to-indigo-700', disabled: false },
    error:   { text: '⚠ Please fill required fields',       bg: 'from-red-500 to-red-600',       disabled: false },
    success: { text: "✓ Message Sent! We'll contact you soon.", bg: 'from-green-500 to-green-600', disabled: true  },
  };
  const btn = btnConfig[btnState];

  // shared input classes
  const inputCls = `w-full bg-[var(--input-bg,#f8fafc)] border border-[var(--input-border,#e2e8f0)]
    rounded-lg px-4 py-[0.85rem] text-[0.9rem] text-gray-900
    placeholder:text-gray-400 outline-none resize-none
    transition-all duration-300
    focus:border-indigo-500 focus:bg-indigo-50/40`;

  return (
    <section
      id="contact"
      className="py-20 px-[5%]"
      style={{ background: 'var(--bg-base, #f1f5f9)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">

        {/* ── Left: Info ── */}
        <Reveal>
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">
            Get In Touch
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Contact Us</h2>
          <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 mb-4" />
          <p className="text-sm text-gray-500 leading-relaxed">
            Reach out for admissions queries, campus visits, or any information. Our team is always ready to help.
          </p>

          {/* Contact rows */}
          <div className="flex flex-col gap-[1.3rem] mt-8">
            {contactItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {/* Icon box */}
                <div
                  className="w-[42px] h-[42px] rounded-[10px] flex-shrink-0
                    flex items-center justify-center text-[1.1rem]
                    bg-indigo-50 border border-indigo-100"
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-[0.66rem] font-bold uppercase tracking-[1.5px] text-indigo-600 mb-[0.2rem]">
                    {item.label}
                  </div>
                  <div
                    className="text-[0.86rem] text-gray-500 leading-[1.55]
                      [&_a]:text-indigo-600 [&_a]:transition-colors [&_a:hover]:text-indigo-400"
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Right: Form ── */}
        <Reveal delay={200}>
          <div
            className="bg-white border border-indigo-100 rounded-[20px] p-10
              shadow-[0_1px_3px_rgba(0,0,0,0.07)]"
          >
            <div
              className="text-[1.4rem] font-semibold text-indigo-600 font-[Poppins,serif]
                pb-4 mb-7 border-b border-gray-200"
            >
              Send a Message
            </div>

            {/* Row: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[1.1rem]">
              <div>
                <label className="block text-[0.68rem] font-semibold uppercase tracking-[1px] text-gray-400 mb-[0.45rem]">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-[0.68rem] font-semibold uppercase tracking-[1px] text-gray-400 mb-[0.45rem]">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-[1.1rem]">
              <label className="block text-[0.68rem] font-semibold uppercase tracking-[1px] text-gray-400 mb-[0.45rem]">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                autoComplete="tel"
                className={inputCls}
              />
            </div>

            {/* Interested In */}
            <div className="mb-[1.1rem]">
              <label className="block text-[0.68rem] font-semibold uppercase tracking-[1px] text-gray-400 mb-[0.45rem]">
                Interested In
              </label>
              <input
                type="text"
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="e.g. B.Tech, LLB, B.Ed..."
                className={inputCls}
              />
            </div>

            {/* Message */}
            <div className="mb-[1.1rem]">
              <label className="block text-[0.68rem] font-semibold uppercase tracking-[1px] text-gray-400 mb-[0.45rem]">
                Your Message *
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={inputCls}
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={btn.disabled}
              className={`w-full bg-gradient-to-r ${btn.bg} text-[#080D1A]
                font-bold text-[0.9rem] tracking-[0.5px] py-4 rounded-lg mt-2
                transition-all duration-300 cursor-pointer
                hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(79,70,229,0.35)]
                disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none`}
            >
              {btn.text}
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;
