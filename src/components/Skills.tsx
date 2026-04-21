"use client";

const skillGroups = [
  {
    label: "Clinical & Technical",
    icon: "✚",
    skills: [
      "Medical Device Troubleshooting",
      "Ventilator Maintenance",
      "Defibrillator Calibration",
      "Patient Monitor Servicing",
      "Preventive Maintenance",
      "Equipment Lifecycle Management",
      "ICU & Emergency Environments",
      "CSSD Workflows",
      "Anaesthesia Equipment",
    ],
  },
  {
    label: "Data & Operations",
    icon: "◎",
    skills: [
      "SAP (Purchasing Module)",
      "Clinical Documentation",
      "Inventory Management",
      "Service Record Maintenance",
      "MS Excel",
      "Data Organisation",
      "ISO Compliance",
      "Audit Readiness",
    ],
  },
  {
    label: "Research & Professional",
    icon: "⚕",
    skills: [
      "Biomedical Visualisation",
      "Patient Safety Systems",
      "Research Support",
      "Technical Report Writing",
      "Cross-functional Collaboration",
      "Medical Device Procurement",
    ],
  },
];

const languages = [
  { lang: "Malayalam", level: "Native", pct: 100 },
  { lang: "English", level: "Professional", pct: 95 },
  { lang: "Hindi", level: "Fluent", pct: 90 },
  { lang: "German", level: "A2 — Learning", pct: 20 },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          <span>06 — Skills</span>
        </div>

        <h2 className="psk-section-title">
          Areas of <strong>Expertise</strong>
        </h2>

        <p className="psk-section-subtitle">
          Technical capability across biomedical systems,
          clinical operations, and healthcare engineering.
        </p>

        {/* Skill Clusters */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "72px",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="psk-card"
              style={{
                padding: "30px",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  color: "var(--teal-aqua)",
                  marginBottom: "14px",
                }}
              >
                {group.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  marginBottom: "22px",
                }}
              >
                {group.label}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="psk-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--teal-aqua)",
              fontFamily: "var(--font-mono)",
              marginBottom: "32px",
            }}
          >
            Languages
          </p>

          <div
            style={{
              display: "grid",
              gap: "22px",
            }}
          >
            {languages.map((language) => (
              <div
                key={language.lang}
                className="psk-card"
                style={{
                  padding: "22px 24px",
                  display: "grid",
                  gridTemplateColumns:
                    "160px 1fr 50px",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {/* Label */}
                <div>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {language.lang}
                  </p>

                  <p
                    style={{
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.04em",
                      fontFamily:
                        "var(--font-mono)",
                    }}
                  >
                    {language.level}
                  </p>
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    height: "4px",
                    background:
                      "rgba(175,221,229,0.08)",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${language.pct}%`,
                      height: "100%",
                      background:
                        "linear-gradient(90deg, var(--teal-deep), var(--teal-aqua))",
                      borderRadius: "999px",
                    }}
                  />
                </div>

                {/* Percentage */}
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    fontFamily:
                      "var(--font-mono)",
                    textAlign: "right",
                  }}
                >
                  {language.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}