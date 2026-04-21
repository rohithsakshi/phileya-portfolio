"use client";

const facts = [
  { label: "Location", value: "Heidelberg, Germany" },
  { label: "Degree", value: "M.Sc. Biomedical Engineering" },
  { label: "University", value: "Heidelberg University" },
  {
    label: "Languages",
    value: "English · German · Hindi · Malayalam",
  },
  {
    label: "Email",
    value: "phileyakoruth10@gmail.com",
  },
];

const highlights = [
  {
    icon: "✚",
    title: "Critical Care",
    desc: "Live ICU & emergency department device experience at Aster Medcity",
  },
  {
    icon: "⚕",
    title: "Device Safety",
    desc: "ISO-compliant maintenance & equipment lifecycle management",
  },
  {
    icon: "◎",
    title: "Academic Rigour",
    desc: "First-class 91% B.Tech · Heidelberg M.Sc. in progress",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(280px, 420px) minmax(0, 1fr)",
            gap: "56px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <div className="psk-section-label">
              <span>01 — About</span>
            </div>

            <h2 className="psk-section-title">
              Who <strong>I Am</strong>
            </h2>

            <p className="psk-section-subtitle">
              Biomedical engineer working at the intersection
              of clinical systems, patient safety, and medical
              device performance.
            </p>

            {/* Quick Facts */}
            <div
              className="psk-card"
              style={{
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <p
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--teal-aqua)",
                        marginBottom: "6px",
                        fontFamily:
                          "var(--font-mono)",
                      }}
                    >
                      {fact.label}
                    </p>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-primary)",
                        lineHeight: 1.6,
                        wordBreak: "break-word",
                      }}
                    >
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* Pull Quote */}
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontSize:
                  "clamp(20px, 2.4vw, 28px)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--text-primary)",
                lineHeight: 1.6,
                paddingLeft: "24px",
                borderLeft:
                  "2px solid var(--teal-aqua)",
                marginBottom: "36px",
                opacity: 0.95,
              }}
            >
              Engineering in healthcare is not just about
              machines — it is about trust, precision, and
              the silent systems patients depend on without
              ever seeing.
            </blockquote>

            <p
              style={{
                fontSize:
                  "clamp(15px, 1.6vw, 17px)",
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: "28px",
              }}
            >
              My work at{" "}
              <span
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Aster Medcity
              </span>{" "}
              — troubleshooting ventilators and defibrillators
              in real-time emergency settings — gave me a
              ground-level understanding of patient safety
              systems that most engineers only encounter in
              textbooks.
            </p>

            <p
              style={{
                fontSize:
                  "clamp(15px, 1.6vw, 17px)",
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: "44px",
              }}
            >
              I am interested in critical care technologies,
              clinical data infrastructure, and the
              engineering layer beneath hospital operations.
              My path spans three countries of clinical
              exposure, a first-class honours B.Tech degree,
              and active postgraduate study in Germany —
              shaped by a deep conviction that engineering
              excellence and patient safety are inseparable.
            </p>

            {/* Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="psk-card"
                  style={{
                    padding: "22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      color: "var(--teal-aqua)",
                      marginBottom: "12px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <p
                    style={{
                      fontFamily:
                        "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}