"use client";

const projects = [
  {
    title: "Surgical Sponge Tracking System",
    event: "MEDHA Hackathon · BETIC × LPU",
    domain: ["Patient Safety", "Medical Device Innovation"],
    abstract:
      "Designed a concept system for real-time tracking of surgical sponges to eliminate retention incidents — a leading cause of preventable surgical harm. The system explores RFID-based passive tracking integrated with existing operating room workflow, enabling automated count reconciliation and reducing dependency on manual sponge audits.",
    problem:
      "Retained surgical items (RSIs) are among the most preventable yet devastating surgical errors. Studies estimate thousands of RSI incidents annually worldwide, often requiring re-operation and causing severe patient harm.",
    outcome:
      "48-hour hackathon deliverable · Concept design and workflow prototype",
    icon: "⚕",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          <span>04 — Projects</span>
        </div>

        <h2 className="psk-section-title">
          Engineering <strong>Work</strong>
        </h2>

        <p className="psk-section-subtitle">
          Applied projects addressing real clinical challenges
          in patient safety and medical device design.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="psk-card"
              style={{
                padding: 0,
                overflow: "hidden",
                borderColor: "var(--border-medium)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "minmax(64px, 80px) 1fr",
                }}
              >
                {/* LEFT ACCENT */}
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, var(--teal-deep) 0%, rgba(15,74,79,0.55) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "32px 0",
                  }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      color: "var(--teal-aqua)",
                    }}
                  >
                    {p.icon}
                  </span>
                </div>

                {/* CONTENT */}
                <div
                  style={{
                    padding: "36px",
                  }}
                >
                  {/* TOP META */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "18px",
                    }}
                  >
                    {p.domain.map((d) => (
                      <span
                        key={d}
                        className="psk-tag"
                      >
                        {d}
                      </span>
                    ))}

                    <span
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                        fontFamily:
                          "var(--font-mono)",
                      }}
                    >
                      {p.event}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-display)",
                      fontSize:
                        "clamp(22px, 2.6vw, 28px)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "22px",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* PROBLEM */}
                  <div
                    style={{
                      padding: "18px 22px",
                      marginBottom: "22px",
                      borderLeft:
                        "2px solid var(--teal-aqua)",
                      background:
                        "rgba(15,164,175,0.05)",
                      borderRadius:
                        "0 10px 10px 0",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        textTransform:
                          "uppercase",
                        color: "var(--teal-aqua)",
                        marginBottom: "8px",
                        fontFamily:
                          "var(--font-mono)",
                      }}
                    >
                      The Problem
                    </p>

                    <p
                      style={{
                        fontSize: "14px",
                        color:
                          "var(--text-secondary)",
                        lineHeight: 1.75,
                      }}
                    >
                      {p.problem}
                    </p>
                  </div>

                  {/* ABSTRACT */}
                  <p
                    style={{
                      fontSize:
                        "clamp(14px, 1.5vw, 15px)",
                      color:
                        "var(--text-secondary)",
                      lineHeight: 1.85,
                      marginBottom: "22px",
                    }}
                  >
                    {p.abstract}
                  </p>

                  {/* OUTCOME */}
                  <p
                    style={{
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                      fontFamily:
                        "var(--font-mono)",
                    }}
                  >
                    {p.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder */}
          <div
            style={{
              padding: "40px",
              border:
                "0.5px dashed var(--border-soft)",
              borderRadius: "16px",
              textAlign: "center",
              background:
                "rgba(15,74,79,0.05)",
            }}
          >
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "10px",
                fontFamily: "var(--font-mono)",
              }}
            >
              Coming Soon
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
              }}
            >
              M.Sc. thesis research project —
              Heidelberg University · 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}