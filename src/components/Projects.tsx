'use client'

const projects = [
  {
    title:    'Surgical Sponge Tracking System',
    event:    'MEDHA Hackathon · BETIC × LPU',
    domain:   ['Patient Safety', 'Medical Device Innovation'],
    abstract:
      'Designed a concept system for real-time tracking of surgical sponges to eliminate retention incidents — a leading cause of preventable surgical harm. The system explores RFID-based passive tracking integrated with existing operating room workflow, enabling automated count reconciliation and reducing dependency on manual sponge audits.',
    problem:
      'Retained surgical items (RSIs) are among the most preventable yet devastating surgical errors. Studies estimate thousands of RSI incidents annually worldwide, often requiring re-operation and causing severe patient harm.',
    outcome:  '48-hour hackathon deliverable · Concept design and workflow prototype',
    icon:     '⚕',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-10"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">04 — Projects</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--wine)] mb-4 leading-tight">
          Engineering
          <span className="text-[var(--gold)] italic font-normal"> Work</span>
        </h2>
        <p className="font-body text-[var(--text-mid)] text-lg mb-12 max-w-xl">
          Applied projects addressing real clinical challenges in patient safety and medical device design.
        </p>

        <div className="space-y-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="card-elegant overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left accent bar */}
                <div
                  className="lg:col-span-1 flex items-center justify-center py-8 lg:py-0"
                  style={{ background: 'var(--wine)', minHeight: '100px' }}
                >
                  <span className="text-3xl text-[var(--gold)]">{p.icon}</span>
                </div>

                {/* Content */}
                <div className="lg:col-span-11 p-8 md:p-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.domain.map(d => (
                      <span key={d} className="skill-pill">{d}</span>
                    ))}
                    <span
                      className="font-ui text-[10px] tracking-widest uppercase px-2.5 py-1 ml-auto"
                      style={{ color: 'var(--text-light)', border: '1px solid rgba(184,137,42,0.15)' }}
                    >
                      {p.event}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--wine)] mb-4">
                    {p.title}
                  </h3>

                  {/* Problem callout */}
                  <div
                    className="p-4 mb-5 border-l-2"
                    style={{
                      borderColor: 'var(--gold)',
                      background:  'rgba(184,137,42,0.05)',
                    }}
                  >
                    <div className="font-ui text-[10px] tracking-widest uppercase text-[var(--gold)] mb-1">
                      The Problem
                    </div>
                    <p className="font-body text-[var(--text-mid)] text-sm leading-relaxed">
                      {p.problem}
                    </p>
                  </div>

                  <p className="font-body text-[var(--text-mid)] leading-relaxed mb-4">
                    {p.abstract}
                  </p>

                  <div className="font-ui text-xs text-[var(--text-light)] tracking-wider">
                    {p.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder card */}
        <div
          className="mt-6 p-8 border border-dashed border-[rgba(184,137,42,0.3)] text-center"
          style={{ background: 'rgba(184,137,42,0.02)' }}
        >
          <p className="font-ui text-xs tracking-widest uppercase text-[var(--text-light)] mb-2">
            Coming Soon
          </p>
          <p className="font-body text-[var(--text-mid)]">
            M.Sc. thesis research project — Heidelberg University · 2026
          </p>
        </div>
      </div>
    </section>
  )
}
