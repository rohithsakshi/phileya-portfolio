"use client";

const experiences = [
  {
    role: "Clinical Biomedical Engineer — Critical Care",
    org: "Aster Medcity Hospital",
    location: "Kochi, India",
    period: "Jun 2024 – Sep 2024",
    type: "Internship",
    highlight: true,
    bullets: [
      "Diagnosed and resolved faults in ventilators, patient monitors, and defibrillators in live ICU and emergency settings.",
      "Maintained ISO-compliant service documentation for critical care devices, supporting audit readiness and clinical handover.",
      "Collaborated directly with clinical staff to minimise device downtime in high-acuity wards.",
      "Gained working exposure to CSSD workflows, anaesthesia equipment, and operating theatre infrastructure.",
    ],
    tags: [
      "ICU Technology",
      "Ventilators",
      "Patient Safety",
      "ISO Compliance",
      "Defibrillators",
    ],
  },
  {
    role: "Biomedical Engineering Intern — Procurement & Operations",
    org: "Cyrix Healthcare",
    location: "Kochi, India",
    period: "Dec 2023 – Jan 2024",
    type: "Internship",
    highlight: false,
    bullets: [
      "Managed SAP purchasing module workflows for medical device procurement across multiple vendor accounts.",
      "Supported inventory management and supply chain coordination for diagnostic and therapeutic equipment.",
      "Prepared technical documentation and procurement reports for capital equipment acquisition.",
    ],
    tags: [
      "SAP",
      "Procurement",
      "Medical Devices",
      "Inventory Management",
    ],
  },
  {
    role: "Biomedical Engineering Intern",
    org: "DR KM Cherian Heart Foundation",
    location: "Kochi, India",
    period: "Dec 2022 – Jan 2023",
    type: "Internship",
    highlight: false,
    bullets: [
      "Observed cardiology device workflows including ECG systems and cardiac monitoring equipment.",
      "Supported equipment calibration and routine preventive maintenance schedules.",
    ],
    tags: [
      "Cardiac Equipment",
      "ECG Systems",
      "Preventive Maintenance",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <div className="psk-section-label">
            <span>02 — Experience</span>
          </div>

          <h2 className="psk-section-title">
            Clinical & Professional
            <br />
            <strong>Background</strong>
          </h2>

          <p className="psk-section-subtitle">
            Hands-on experience across critical care
            engineering, medical device operations,
            procurement systems, and hospital workflows.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "28px 1fr",
                gap: "28px",
                paddingBottom:
                  idx < experiences.length - 1
                    ? "42px"
                    : "0",
              }}
            >
              {/* Timeline Spine */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "6px",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: exp.highlight
                      ? "var(--teal-aqua)"
                      : "var(--teal-deep)",
                    border: `1.5px solid ${
                      exp.highlight
                        ? "var(--teal-aqua)"
                        : "var(--border-medium)"
                    }`,
                    boxShadow: exp.highlight
                      ? "0 0 0 3px rgba(15,164,175,0.15)"
                      : "none",
                    flexShrink: 0,
                  }}
                />

                {/* Line */}
                {idx < experiences.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flex: 1,
                      minHeight: "44px",
                      marginTop: "8px",
                      background:
                        "linear-gradient(to bottom, var(--border-medium), transparent)",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="psk-card"
                style={{
                  padding: "30px 34px",
                  borderColor: exp.highlight
                    ? "var(--border-medium)"
                    : "var(--border-subtle)",
                  background: exp.highlight
                    ? "rgba(15,74,79,0.35)"
                    : "var(--bg-card)",
                }}
              >
                {/* Top Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "22px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-display)",
                        fontSize:
                          "clamp(18px, 2.2vw, 22px)",
                        fontWeight: 500,
                        color:
                          "var(--text-primary)",
                        marginBottom: "6px",
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.role}
                    </p>

                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--teal-aqua)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {exp.org}
                      <span
                        style={{
                          color:
                            "var(--text-muted)",
                          margin: "0 8px",
                        }}
                      >
                        ·
                      </span>
                      {exp.location}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "6px",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                        fontFamily:
                          "var(--font-mono)",
                      }}
                    >
                      {exp.period}
                    </span>

                    <span className="psk-badge psk-badge--complete">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "22px",
                  }}
                >
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--teal-aqua)",
                          fontSize: "10px",
                          marginTop: "5px",
                          flexShrink: 0,
                        }}
                      >
                        ▸
                      </span>

                      <span
                        style={{
                          fontSize:
                            "clamp(14px, 1.5vw, 15px)",
                          color:
                            "var(--text-secondary)",
                          lineHeight: 1.75,
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="psk-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}