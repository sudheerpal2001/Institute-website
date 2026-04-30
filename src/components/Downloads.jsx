const PRIMARY = "#0000FF";
const PRIMARY_GLOW = "rgba(26,79,160,0.07)";
const PRIMARY_BORDER = "rgba(26,79,160,0.2)";

const downloads = [
  { icon: "⚙️", name: "Engineering & Management", meta: "PDF · B.Tech, MBA, Poly", href: "https://www.rizvigroup.org/downloads/engineeringCollege_Prospectous.pdf" },
  { icon: "🎓", name: "Degree College", meta: "PDF · B.A., B.Sc., B.Com.", href: "https://www.rizvigroup.org/downloads/degreeCollege_Prospectous.pdf" },
  { icon: "📖", name: "College of Education", meta: "PDF · B.Ed., D.El.Ed.", href: "https://www.rizvigroup.org/downloads/degreeCollege_Prospectous.pdf" },
  { icon: "⚖️", name: "Law College", meta: "PDF · LLB, BA.LLB", href: "https://www.rizvigroup.org/downloads/lawCollege_Prospectous.pdf" },
  { icon: "🏫", name: "Springfield School", meta: "PDF · CBSE Classes I–XII", href: "https://www.rizvigroup.org/downloads/springfieldSchool_Prospectous.pdf" },
  { icon: "✏️", name: "Learners' Academy", meta: "PDF · CBSE Classes I–XII", href: "https://www.rizvigroup.org/downloads/learners_Prospectous.pdf" },
];

const SectionHeader = ({ tag, title, desc }) => (
  <div>
    <span
      className="inline-block text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-4"
      style={{ color: PRIMARY, }}
    >
      {tag}
    </span>
    <h2
      className="text-4xl font-bold leading-tight mb-3"
      style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1a1a1a" }}
    >
      {title}
    </h2>
    <div className="w-10 h-0.5 rounded mb-4" style={{ background: PRIMARY }} />
    <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#6b6b6b" }}>
      {desc}
    </p>
  </div>
);

const Downloads = () => (
  <section id="downloads" className="px-6 py-10 bg-blue-50/20">
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        tag="Resources"
        title="Download Prospectus"
        desc="Download official information brochures for all our institutions."
      />
      <div className="grid gap-5 mt-10" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
        {downloads.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 no-underline"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              color: "#1a1a1a",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = PRIMARY;
              e.currentTarget.style.transform = "translateX(5px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,79,160,0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: PRIMARY_GLOW, border: `1px solid ${PRIMARY_BORDER}` }}
            >
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[0.86rem] truncate" style={{ color: "#1a1a1a" }}>
                {item.name}
              </div>
              <div className="text-[0.68rem] font-semibold tracking-wide mt-0.5" style={{ color: PRIMARY }}>
                {item.meta}
              </div>
            </div>
            <div className="text-lg flex-shrink-0" style={{ color: PRIMARY }}>↓</div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Downloads;
