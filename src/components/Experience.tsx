'use client'

const experiences = [
  {
    role:     'Clinical Biomedical Engineer — Critical Care',
    org:      'Aster Medcity Hospital',
    location: 'Kochi, India',
    period:   'Jun 2024 – Sep 2024',
    type:     'Internship',
    highlight: true,
    bullets: [
      'Diagnosed and resolved faults in ventilators, patient monitors, and defibrillators in live ICU and emergency settings.',
      'Maintained ISO-compliant service documentation for critical care devices, supporting audit readiness and clinical handover.',
      'Collaborated directly with clinical staff to minimise device downtime in high-acuity wards.',
      'Gained working exposure to CSSD workflows, anaesthesia equipment, and operating theatre infrastructure.',
    ],
    tags: ['ICU Technology', 'Ventilators', 'Patient Safety', 'ISO Compliance', 'Defibrillators'],
  },
  {
    role:     'Biomedical Engineering Intern — Procurement & Operations',
    org:      'Cyrix Healthcare',
    location: 'Kochi, India',
    period:   'Dec 2023 – Jan 2024',
    type:     'Internship',
    highlight: false,
    bullets: [
      'Managed SAP purchasing module workflows for medical device procurement across multiple vendor accounts.',
      'Supported inventory management and supply chain coordination for diagnostic and therapeutic equipment.',
      'Prepared technical documentation and procurement reports for capital equipment acquisition.',
    ],
    tags: ['SAP', 'Procurement', 'Medical Devices', 'Inventory Management'],
  },
  {
    role:     'Biomedical Engineering Intern',
    org:      'DR KM Cherian Heart Foundation',
    location: 'Kochi, India',
    period:   'Dec 2022 – Jan 2023',
    type:     'Internship',
    highlight: false,
    bullets: [
      'Observed cardiology device workflows including ECG systems and cardiac monitoring equipment.',
      'Supported equipment calibration and routine preventive maintenance schedules.',
    ],
    tags: ['Cardiac Equipment', 'ECG Systems', 'Preventive Maintenance'],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-10"
      style={{ background: 'var(--wine-deeper)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="section-label text-[var(--gold)] mb-4">02 — Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--cream)] leading-tight">
            Clinical &amp; Professional
            <br />
            <span className="text-[var(--gold)] italic font-normal">Background</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6 md:gap-10">
              {/* Connector */}
              <div className="relative flex flex-col items-center">
                <div
                  className="timeline-dot mt-1"
                  style={exp.highlight ? { background: 'var(--gold)', boxShadow: '0 0 0 3px rgba(212,168,71,0.25)' } : {}}
                />
                {idx < experiences.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{ background: 'linear-gradient(to bottom, rgba(212,168,71,0.4), transparent)', minHeight: '40px' }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 mb-4 p-6 md:p-8"
                style={{
                  background:   exp.highlight ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                  border:       exp.highlight ? '1px solid rgba(212,168,71,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  transition:   'all 0.3s ease',
                }}
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="font-display text-lg md:text-xl font-semibold text-[var(--cream)]">
                      {exp.role}
                    </div>
                    <div className="font-ui text-sm text-[var(--gold)] mt-1">
                      {exp.org}
                      <span className="text-[rgba(248,243,236,0.4)] mx-2">·</span>
                      {exp.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                    <span className="font-ui text-xs tracking-widest text-[rgba(248,243,236,0.5)] whitespace-nowrap">
                      {exp.period}
                    </span>
                    <span
                      className="font-ui text-[10px] tracking-widest uppercase px-2 py-0.5"
                      style={{
                        border:     '1px solid rgba(184,137,42,0.4)',
                        color:      'var(--gold)',
                        background: 'rgba(184,137,42,0.08)',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-[var(--gold)] mt-1 flex-shrink-0 text-xs">▸</span>
                      <span className="font-body text-[rgba(248,243,236,0.75)] text-base leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-ui text-[10px] tracking-wider uppercase px-2.5 py-1"
                      style={{
                        border:     '1px solid rgba(255,255,255,0.1)',
                        color:      'rgba(248,243,236,0.45)',
                        background: 'rgba(255,255,255,0.03)',
                      }}
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
  )
}
