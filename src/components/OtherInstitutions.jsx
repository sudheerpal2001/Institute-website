const PRIMARY = "#0000FF";
const PRIMARY_GLOW = "rgba(26,79,160,0.07)";
const PRIMARY_BORDER = "rgba(26,79,160,0.2)";

const institutions = [
  "Rizvi College of Art, Science & Commerce, Mumbai",
  "Rizvi College of Engineering, Mumbai",
  "Rizvi Institute of Management Studies & Research, Mumbai",
  "Rizvi Academy of Business Management, Mumbai",
  "Rizvi College of Architecture, Mumbai",
  "Rizvi College of Hotel Management & Catering Technology, Mumbai",
  "Rizvi Academy of Hospitality Management, Mumbai",
  "Rizvi Springfield High School, Mumbai",
  "Rizvi Law College, Mumbai",
  "Rizvi College of Education (B.Ed.), Mumbai",
  "Dr. A. H. Rizvi College of Science & Commerce, Jaunpur",
  "Meena Rizvi High School & Inter College, Jaunpur",
  "D. M. Raza Boys School & Inter College, Jaunpur",
];

const SectionHeader = ({ tag, title, desc }) => (
  <div>
    <span
      className="inline-block text-[0.68rem] font-semibold tracking-[0.18em] uppercase  mb-4"
      style={{ color: PRIMARY,}}
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

const OtherInstitutions = () => (
  <section id="other-inst" className="px-6 py-10 bg-blue-50">
    <div className="max-w-5xl mx-auto">
      <SectionHeader
        tag="Extended Family"
        title="Other Institutions"
        desc="Rizvi Group's reach extends across Mumbai and Jaunpur, with over a dozen more affiliated institutions."
      />
      <div className="grid gap-4 mt-10" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {institutions.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[0.82rem] transition-all duration-300 cursor-default"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              color: "#6b6b6b",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = PRIMARY_BORDER;
              e.currentTarget.style.color = "#1a1a1a";
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
              e.currentTarget.style.color = "#6b6b6b";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: PRIMARY }} />
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OtherInstitutions;
