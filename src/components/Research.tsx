'use client'

const certifications = [
  {
    title:    'Biomedical Visualisation',
    provider: 'Coursera',
    status:   'Completed',
    badge:    'complete',
    note:     'Techniques for medical illustration and imaging data visualisation.',
  },
  {
    title:    'Additional Certification',
    provider: 'Forthcoming',
    status:   'Planned',
    badge:    'planned',
    note:     'IEC 60601-1 awareness or clinical informatics — in consideration.',
  },
]

export default function Research() {
  return (
    <section id="research" className="psk-section psk-section--elevated">
      <div className="psk-grid-overlay" />

      <div className="psk-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="psk-section-label">
          <span>05 — Research &amp; Publications</span>
        </div>
        <h2 className="psk-section-title">
          Academic <strong>Output</strong>
        </h2>
        <p className="psk-section-subtitle">
          Ongoing research at the intersection of clinical engineering and medical device safety.
          Publications and conference contributions will appear here as they are completed.
        </p>

        {/* Active Research */}
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--teal-aqua)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '20px',
            }}
          >
            Active Research
          </p>

          <div
            className="psk-card"
            style={{
              padding: '32px',
              borderColor: 'var(--border-medium)',
              background: 'rgba(15,74,79,0.3)',
            }}
          >
            {/* Status indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#4ECDC4',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#4ECDC4',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                In Progress
              </span>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}
            >
              M.Sc. Thesis Research
            </h4>

            <p
              style={{
                fontSize: '12px',
                color: 'var(--teal-aqua)',
                letterSpacing: '0.04em',
                marginBottom: '16px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Heidelberg University · 2025 – 2027
            </p>

            <p
              style={{
                fontSize: 'clamp(14px, 1.5vw, 15px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              Research topic currently under development in collaboration with academic supervisors
              at Heidelberg University. Focus area spans biomedical instrumentation, clinical data
              systems, and medical device engineering. Title and abstract will be published upon
              project formalisation.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--teal-aqua)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '20px',
            }}
          >
            Certifications &amp; Coursework
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="psk-card"
                style={{
                  padding: '24px',
                  borderColor:
                    cert.badge === 'complete'
                      ? 'var(--border-medium)'
                      : 'var(--border-subtle)',
                  background:
                    cert.badge === 'complete'
                      ? 'rgba(15,74,79,0.25)'
                      : 'var(--bg-card)',
                }}
              >
                <span
                  className={`psk-badge psk-badge--${cert.badge}`}
                  style={{ marginBottom: '14px', display: 'inline-block' }}
                >
                  {cert.status}
                </span>

                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {cert.title}
                </h4>

                <p
                  style={{
                    fontSize: '11px',
                    color: 'var(--teal-aqua)',
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {cert.provider}
                </p>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {cert.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications placeholder */}
        <div>
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--teal-aqua)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '20px',
            }}
          >
            Publications &amp; Conferences
          </p>

          <div
            style={{
              padding: '40px',
              border: '0.5px dashed var(--border-soft)',
              borderRadius: '16px',
              textAlign: 'center',
              background: 'rgba(15,74,79,0.06)',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                color: 'var(--border-medium)',
                marginBottom: '12px',
              }}
            >
              ✦
            </div>
            <p
              style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '8px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              In Development
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
              }}
            >
              Conference posters and academic publications are planned as part of M.Sc. research.
              This section will be updated as outputs are completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
