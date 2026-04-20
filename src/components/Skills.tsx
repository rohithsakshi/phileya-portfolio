'use client'

const skillGroups = [
  {
    label: 'Clinical & Technical',
    icon:  '✚',
    skills: [
      'Medical Device Troubleshooting',
      'Ventilator Maintenance',
      'Defibrillator Calibration',
      'Patient Monitor Servicing',
      'Preventive Maintenance',
      'Equipment Lifecycle Management',
      'ICU & Emergency Environments',
      'CSSD Workflows',
      'Anaesthesia Equipment',
    ],
  },
  {
    label: 'Data & Operations',
    icon:  '◎',
    skills: [
      'SAP (Purchasing Module)',
      'Clinical Documentation',
      'Inventory Management',
      'Service Record Maintenance',
      'MS Excel',
      'Data Organisation',
      'ISO Compliance',
      'Audit Readiness',
    ],
  },
  {
    label: 'Research & Professional',
    icon:  '⚕',
    skills: [
      'Biomedical Visualisation',
      'Patient Safety Systems',
      'Research Support',
      'Technical Report Writing',
      'Cross-functional Collaboration',
      'Medical Device Procurement',
    ],
  },
]

const languages = [
  { lang: 'English',   level: 'Professional',  pct: 95 },
  { lang: 'German',    level: 'A2 — Learning',  pct: 20 },
  { lang: 'Hindi',     level: 'Fluent',         pct: 90 },
  { lang: 'Malayalam', level: 'Native',         pct: 100 },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-10"
      style={{ background: 'var(--cream-warm)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">06 — Skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--wine)] mb-12 leading-tight">
          Areas of
          <span className="text-[var(--gold)] italic font-normal"> Expertise</span>
        </h2>

        {/* Skill clusters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="p-8 bg-white border border-[rgba(184,137,42,0.2)] hover:border-[rgba(184,137,42,0.45)] transition-colors duration-300"
            >
              <div className="text-2xl text-[var(--gold)] mb-3">{g.icon}</div>
              <h3 className="font-display text-base font-semibold text-[var(--wine)] mb-5">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map(s => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-ui text-xs tracking-widest uppercase text-[var(--gold)] mb-6">
            Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languages.map(l => (
              <div key={l.lang} className="flex items-center gap-5">
                <div className="w-28 flex-shrink-0">
                  <div className="font-display text-sm font-semibold text-[var(--wine)]">
                    {l.lang}
                  </div>
                  <div className="font-ui text-[10px] tracking-wider text-[var(--text-light)] mt-0.5">
                    {l.level}
                  </div>
                </div>
                <div className="flex-1 h-1 bg-[rgba(184,137,42,0.15)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width:      `${l.pct}%`,
                      background: 'linear-gradient(90deg, var(--wine), var(--gold))',
                    }}
                  />
                </div>
                <span className="font-ui text-xs text-[var(--text-light)] w-8 text-right">
                  {l.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
