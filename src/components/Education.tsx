"use client";

const education = [
  {
    degree: "M.Sc. Biomedical Engineering",
    institution: "Heidelberg University",
    location: "Heidelberg, Germany",
    period: "Oct 2025 — Present",
    status: "In Progress",
    badge: "active",
    note:
      "Currently completing core curriculum in biomedical instrumentation, medical imaging, and clinical data systems.",
    highlight: true,
  },
  {
    degree: "B.Tech Biomedical Engineering",
    institution:
      "APJ Abdul Kalam Technological University",
    location: "Kerala, India",
    period: "2020 — 2024",
    status: "First Class · 91%",
    badge: "complete",
    note:
      "Graduated with first-class honours. Final year project in biomedical device design.",
    highlight: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="psk-section psk-section--elevated"
    >
      <div className="psk-grid-overlay" />

      <div
        className="psk-container"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="psk-section-label">
          <span>03 — Education</span>
        </div>

        <h2 className="psk-section-title">
          Academic <strong>Foundation</strong>
        </h2>

        <p className="psk-section-subtitle">
          A strong academic path shaped by biomedical
          engineering, clinical systems, and healthcare
          technology.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="psk-card"
              style={{
                padding: "32px",
                position: "relative",
                overflow: "hidden",
                borderColor: edu.highlight
                  ? "var(--border-medium)"
                  : "var(--border-subtle)",
                background: edu.highlight
                  ? "linear-gradient(145deg, rgba(15,74,79,0.5) 0%, rgba(0,49,53,0.6) 100%)"
                  : "var(--bg-card)",
              }}
            >
              {/* Corner Accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "90px",
                  height: "90px",
                  background: edu.highlight
                    ? "rgba(15,164,175,0.06)"
                    : "rgba(175,221,229,0.03)",
                  clipPath:
                    "polygon(100% 0, 0 0, 100% 100%)",
                }}
              />

              {/* Badge */}
              <span
                className={`psk-badge psk-badge--${edu.badge}`}
                style={{
                  marginBottom: "20px",
                  display: "inline-block",
                }}
              >
                {edu.status}
              </span>

              {/* Degree */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize:
                    "clamp(20px, 2.4vw, 24px)",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1.25,
                  marginBottom: "10px",
                }}
              >
                {edu.degree}
              </h3>

              {/* Institution */}
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--teal-aqua)",
                  letterSpacing: "0.02em",
                  marginBottom: "6px",
                }}
              >
                {edu.institution}
              </p>

              {/* Meta */}
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                  marginBottom: "22px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {edu.location} · {edu.period}
              </p>

              <div
                style={{
                  width: "36px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, var(--teal-aqua), transparent)",
                  marginBottom: "18px",
                }}
              />

              {/* Note */}
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                {edu.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}