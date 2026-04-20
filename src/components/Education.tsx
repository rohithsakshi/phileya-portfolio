'use client'

const education = [
  {
    degree:      'M.Sc. Biomedical Engineering',
    institution: 'Heidelberg University',
    location:    'Heidelberg, Germany',
    period:      'Oct 2025 — Present',
    status:      'In Progress',
    note:        'Currently completing core curriculum in biomedical instrumentation, medical imaging, and clinical data systems.',
    highlight:   true,
  },
  {
    degree:      'B.Tech Biomedical Engineering',
    institution: 'APJ Abdul Kalam Technological University',
    location:    'Kerala, India',
    period:      '2020 — 2024',
    status:      'First Class · 91%',
    note:        'Graduated with first-class honours. Final year project in biomedical device design.',
    highlight:   false,
  },
]

export default function Education() {
  return (
    <section
      className="py-24 px-6 md:px-10"
      style={{ background: 'var(--cream-warm)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">03 — Education</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--wine)] mb-12 leading-tight">
          Academic
          <span className="text-[var(--gold)] italic font-normal"> Foundation</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 relative overflow-hidden"
              style={{
                background: edu.highlight ? 'var(--wine)' : 'white',
                border:     `1px solid ${edu.highlight ? 'rgba(212,168,71,0.4)' : 'rgba(184,137,42,0.2)'}`,
              }}
            >
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-10"
                style={{
                  background:       edu.highlight ? 'var(--gold)' : 'var(--wine)',
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                }}
              />

              <div
                className="font-ui text-xs tracking-widest uppercase px-2 py-1 inline-block mb-4"
                style={{
                  border:     `1px solid ${edu.highlight ? 'rgba(212,168,71,0.5)' : 'rgba(184,137,42,0.3)'}`,
                  color:      edu.highlight ? 'var(--gold)' : 'var(--wine)',
                  background: edu.highlight ? 'rgba(212,168,71,0.1)' : 'rgba(107,26,42,0.05)',
                }}
              >
                {edu.status}
              </div>

              <h3
                className="font-display text-xl font-bold mb-1 leading-snug"
                style={{ color: edu.highlight ? 'var(--cream)' : 'var(--wine)' }}
              >
                {edu.degree}
              </h3>

              <div
                className="font-ui text-sm mb-1"
                style={{ color: edu.highlight ? 'var(--gold-light)' : 'var(--gold)' }}
              >
                {edu.institution}
              </div>

              <div
                className="font-ui text-xs mb-4"
                style={{ color: edu.highlight ? 'rgba(248,243,236,0.5)' : 'var(--text-light)' }}
              >
                {edu.location} · {edu.period}
              </div>

              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: edu.highlight ? 'rgba(248,243,236,0.7)' : 'var(--text-mid)' }}
              >
                {edu.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
