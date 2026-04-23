"use client";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "96px 0 48px",
        background:
          "linear-gradient(180deg, #001a1d 0%, #000d0f 100%)",
        overflow: "hidden",
      }}
    >
      {/* Grid Overlay */}
      <div className="psk-grid-overlay" />

      {/* Ambient Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 60% at 50% 20%, rgba(15,164,175,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        className="psk-container"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* CTA Card */}
        <div
          className="psk-glass"
          style={{
            padding: "52px 40px",
            borderColor: "var(--border-medium)",
            textAlign: "center",
            marginBottom: "72px",
          }}
        >
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--teal-aqua)",
              fontFamily: "var(--font-mono)",
              marginBottom: "14px",
            }}
          >
            Currently Available
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize:
                "clamp(28px, 3vw, 40px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              marginBottom: "18px",
              lineHeight: 1.2,
            }}
          >
            Open for Opportunities
          </h3>

          <p
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: "640px",
              margin: "0 auto 34px",
            }}
          >
            Open to research collaborations,
            internships, and biomedical engineering
            opportunities across Europe — especially
            where healthcare meets precision
            engineering.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:phileyakoruth10@gmail.com"
              className="footer-primary-btn"
            >
              Send an Email
            </a>

            <a
              href="https://www.linkedin.com/in/phileya-susan-koruth-551802263/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-secondary-btn"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            paddingTop: "24px",
            borderTop:
              "0.5px solid var(--border-subtle)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily:
                  "var(--font-display)",
                fontSize: "22px",
                fontWeight: 400,
                color: "var(--text-primary)",
                marginBottom: "4px",
              }}
            >
              Phileya Susan Koruth
            </p>

            <p
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              M.Sc. Biomedical Engineering ·
              Heidelberg University
            </p>
          </div>

          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            © {new Date().getFullYear()} ·
            Heidelberg, Germany
          </p>
        </div>
      </div>
    </footer>
  );
}