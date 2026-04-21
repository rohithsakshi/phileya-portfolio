"use client";

const contactItems = [
  {
    label: "Email",
    value: "phileyakoruth10@gmail.com",
    href: "mailto:phileyakoruth10@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/phileya-susan-koruth",
    href: "https://www.linkedin.com/in/phileya-susan-koruth-551802263",
    icon: "⟐",
  },
  {
    label: "Location",
    value: "Heidelberg, Germany",
    href: null,
    icon: "◎",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="psk-section psk-section--elevated"
    >
      <div className="psk-grid-overlay" />

      {/* Ambient Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(15,164,175,0.06) 0%, transparent 70%)",
        }}
      />

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
              "minmax(320px, 1.2fr) minmax(280px, 0.8fr)",
            gap: "56px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <div className="psk-section-label">
              <span>07 — Contact</span>
            </div>

            <h2 className="psk-section-title">
              Let’s Build
              <br />
              <strong>Something Together</strong>
            </h2>

            <p className="psk-section-subtitle">
              Open to research collaborations, clinical
              engineering roles, internships, and academic
              opportunities across Germany and Europe.
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                maxWidth: "520px",
                marginBottom: "40px",
              }}
            >
              I enjoy connecting with professionals working
              in biomedical systems, patient safety,
              healthcare technology, and medical device
              innovation. If your work lives somewhere
              between engineering and human impact — we’ll
              probably get along.
            </p>

            <a
              href="mailto:phileyakoruth10@gmail.com"
              style={{
                display: "inline-block",
                padding: "14px 34px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, var(--teal-aqua), var(--teal-deep))",
                color: "#AFDDE5",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                boxShadow:
                  "0 12px 32px rgba(15,164,175,0.18)",
              }}
            >
              Start a Conversation
            </a>
          </div>

          {/* RIGHT */}
          <div
            className="psk-card"
            style={{
              padding: "32px",
              borderColor: "var(--border-medium)",
            }}
          >
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal-aqua)",
                fontFamily: "var(--font-mono)",
                marginBottom: "28px",
              }}
            >
              Contact Details
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border:
                        "0.5px solid var(--border-medium)",
                      borderRadius: "10px",
                      background:
                        "rgba(15,74,79,0.28)",
                      color: "var(--teal-aqua)",
                      fontSize: "15px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                        fontFamily:
                          "var(--font-mono)",
                      }}
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "14px",
                          color:
                            "var(--text-primary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: "14px",
                          color:
                            "var(--text-primary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}