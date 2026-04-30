import React from 'react';

// ─── Data ──────────────────────────────────────────────────────────
const institutions = [
  { label: "Engineering College",  href: "http://www.drce.org" },
  { label: "Law College",          href: "http://rizvilaw.in" },
  { label: "Degree College",       href: "http://www.rizvidegree.co.in" },
  { label: "College of Education", href: "http://www.rizvidegree.co.in/bed.html" },
  { label: "Springfield School",   href: "http://www.drsf.co.in" },
  { label: "Learners' Academy",    href: "http://www.rlajnp.co.in" },
];

const quickLinks = [
  { label: "Home",         href: "#home" },
  { label: "About Us",     href: "#aboutUs" },
  { label: "Institutions", href: "#features" },
  { label: "Campus Life",  href: "#campus" },
  { label: "Downloads",    href: "#downloads" },
  { label: "Apply Now",    href: "https://forms.gle/UfrdXMKE1wKckco6A", external: true },
];

const contactItems = [
  {
    icon: "📍",
    label: "Address",
    value: <>Karari, Kaushambi,<br />Uttar Pradesh – 212 206</>,
  },
  {
    icon: "📞",
    label: "Phone",
    value: (
      <>
        <a href="tel:7080205245" className="hover:text-indigo-400 transition-colors">7080205245</a>
        {" / "}
        <a href="tel:7080205246" className="hover:text-indigo-400 transition-colors">7080205246</a>
      </>
    ),
  },
  {
    icon: "✉️",
    label: "Email",
    value: (
      <>
        <a href="mailto:contactus@drce.org" className="hover:text-indigo-400 transition-colors block">contactus@drce.org</a>
        <a href="mailto:rizvi_education@hotmail.com" className="hover:text-indigo-400 transition-colors block">rizvi_education@hotmail.com</a>
      </>
    ),
  },
  {
    icon: "🕘",
    label: "Office Hours",
    value: "Mon – Sat, 9:00 AM – 5:00 PM",
  },
];

const socialLinks = [
  { label: "Facebook",  aria: "Facebook",  char: "f" },
  { label: "Twitter",   aria: "Twitter",   char: "𝕏" },
  { label: "Instagram", aria: "Instagram", char: "ig" },
  { label: "YouTube",   aria: "YouTube",   char: "▶" },
  { label: "LinkedIn",  aria: "LinkedIn",  char: "in" },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use",   href: "#" },
  { label: "Sitemap",        href: "#" },
  { label: "Contact",        href: "#newsletter" },
];

// ─── Shared style helpers ──────────────────────────────────────────
const mutedText   = "text-[rgba(240,235,224,0.48)]";
const mutedText35 = "text-[rgba(240,235,224,0.35)]";
const mutedText50 = "text-[rgba(240,235,224,0.50)]";

// ─── Footer Component ──────────────────────────────────────────────
const Footer = () => {
  return (
    <footer
      className="border-t border-[rgba(37,99,235,0.2)]"
      style={{ background: 'var(--footer-bg, #080D1A)', color: 'rgba(240,235,224,0.7)' }}
    >
      {/* ── Top Grid ── */}
      <div
        className="px-[5%] py-[60px_5%_50px] grid gap-14
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.3fr]
          border-b border-[rgba(255,255,255,0.06)]"
        style={{ paddingTop: '60px', paddingBottom: '50px' }}
      >

        {/* Brand Column */}
        <div>
          {/* Logo row */}
          <div className="flex items-center gap-4 mb-5">
            <img
              src="Trust_logo.jpg"
              alt="Dr. Akhtar Rizvi Educational Trust"
              className="h-14 w-auto rounded-lg border border-[rgba(37,99,235,0.3)]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div>
              <div
                className="text-[1.15rem] font-bold leading-[1.2] font-[Poppins,serif]"
                style={{ color: 'var(--primary, #4f46e5)' }}
              >
                Dr. Akhtar Rizvi<br />Educational Trust
              </div>
              <div className="text-[0.68rem] tracking-[1px] mt-1 text-[rgba(240,235,224,0.35)]">
                Est. 1985 · Kaushambi, Uttar Pradesh
              </div>
            </div>
          </div>

          {/* Description */}
          <p className={`text-[0.82rem] leading-[1.8] ${mutedText50} mb-[1.4rem] max-w-[280px]`}>
            Building a knowledge-driven society through excellence in engineering, law,
            arts, science, education &amp; schooling across Uttar Pradesh and Maharashtra.
          </p>

          {/* Toll Free */}
          <a
            href="tel:18002005802"
            className="inline-flex items-center gap-2 text-[0.82rem] font-bold tracking-[0.3px]
              px-[1.1rem] py-[0.55rem] rounded-[6px]
              bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.25)]
              transition-all duration-300 hover:bg-[rgba(37,99,235,0.18)]"
            style={{ color: 'var(--primary, #4f46e5)' }}
          >
            ☎️ Toll Free: 1800-200-5802
          </a>

          {/* Social Icons */}
          <div className="flex gap-[0.6rem] mt-5">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href="#"
                aria-label={s.aria}
                title={s.label}
                className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center
                  text-[0.75rem] text-[rgba(240,235,224,0.5)]
                  bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]
                  transition-all duration-300
                  hover:bg-[rgba(37,99,235,0.15)] hover:border-[rgba(37,99,235,0.35)]
                  hover:text-[var(--primary,#4f46e5)]
                  no-underline"
              >
                {s.char}
              </a>
            ))}
          </div>
        </div>

        {/* Institutions Column */}
        <div>
          <ColTitle>Institutions</ColTitle>
          <ul className="flex flex-col gap-[0.7rem]">
            {institutions.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[0.82rem] ${mutedText} block leading-[1.5]
                    transition-all duration-200 hover:text-[var(--primary,#4f46e5)] hover:pl-[5px]`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <ColTitle>Quick Links</ColTitle>
          <ul className="flex flex-col gap-[0.7rem]">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`text-[0.82rem] ${mutedText} block leading-[1.5]
                    transition-all duration-200 hover:text-[var(--primary,#4f46e5)] hover:pl-[5px]`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <ColTitle>Contact Us</ColTitle>
          <div className="flex flex-col gap-4">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-[0.85rem]">
                {/* Icon box */}
                <div
                  className="w-[30px] h-[30px] mt-[2px] rounded-[7px] flex-shrink-0
                    flex items-center justify-center text-[0.85rem]
                    bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)]"
                >
                  {item.icon}
                </div>
                <div className={`text-[0.8rem] ${mutedText} leading-[1.6]`}>
                  <div
                    className="text-[0.62rem] font-bold uppercase tracking-[1.2px] mb-[0.15rem]"
                    style={{ color: 'var(--primary, #4f46e5)' }}
                  >
                    {item.label}
                  </div>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Embedded Map ── */}
      <div className="px-[5%] border-t border-[rgba(255,255,255,0.06)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1!2d81.423434!3d25.460318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3a1c2d4e5f6a7b8!2sRizvi+Educational+Campus!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rizvi Educational Campus Location"
          className="block w-full h-[200px] border-0 border-b border-[rgba(37,99,235,0.12)]"
          style={{ filter: 'brightness(0.85) saturate(0.7)' }}
        />
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="px-[5%] py-[1.4rem] flex justify-between items-center flex-wrap gap-3
          border-t border-[rgba(255,255,255,0.06)]"
      >
        <div className={`text-[0.76rem] ${mutedText35}`}>
          © 2025{" "}
          <span style={{ color: 'var(--primary, #4f46e5)' }}>Rizvi Group of Institutions</span>.
          {" "}All Rights Reserved. · Dr. Akhtar Rizvi Educational Trust
        </div>

        <div className="flex items-center gap-5">
          {bottomLinks.map((link, i) => (
            <React.Fragment key={i}>
              <a
                href={link.href}
                className={`text-[0.73rem] ${mutedText35}
                  transition-colors duration-200 hover:text-[var(--primary,#4f46e5)]`}
              >
                {link.label}
              </a>
              {i < bottomLinks.length - 1 && (
                <span className="text-[0.7rem] text-[rgba(240,235,224,0.15)]">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

// ─── Small helper: Column Title ────────────────────────────────────
const ColTitle = ({ children }) => (
  <div
    className="text-[0.68rem] font-bold uppercase tracking-[2.5px]
      text-[rgba(240,235,224,0.9)] mb-[1.4rem] pb-[0.8rem]
      border-b border-[rgba(37,99,235,0.15)]"
  >
    {children}
  </div>
);

export default Footer;
