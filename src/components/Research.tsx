'use client'

export default function Research() {
  return (
    <section
      id="research"
      className="py-28 px-6 md:px-10"
      style={{ background: 'var(--wine-darker, #3A0E18)' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-[var(--gold)] mb-4">05 — Research &amp; Publications</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4 leading-tight">
          Academic
          <span className="text-[var(--gold)] italic font-normal"> Output</span>
        </h2>
        <p className="font-body text-[rgba(248,243,236,0.65)] text-lg mb-14 max-w-xl">
          Ongoing research at the intersection of clinical engineering and medical device safety.
          Publications and conference contributions will appear here as they are completed.
        </p>

        {/* Active Research */}
        <div className="mb-10">
          <h3 className="font-ui text-xs tracking-widest uppercase text-[var(--gold)] mb-6">
            Active Research
          </h3>
          <div
            className="p-8 border border-[rgba(212,168,71,0.25)] relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            {/* Pulsing indicator */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-2.5 h-2.5 rounded-full bg-[#4CAF80] flex-shrink-0"
                style={{ animation: 'pulse 2s ease-in-out infinite', boxShadow: '0 0 6px rgba(76,175,128,0.5)' }}
              />
              <span className="font-ui text-xs tracking-widest uppercase text-[#4CAF80]">
                In Progress
              </span>
            </div>

            <h4 className="font-display text-xl font-semibold text-[var(--cream)] mb-2">
              M.Sc. Thesis Research
            </h4>
            <p className="font-ui text-sm text-[var(--gold)] mb-3">
              Heidelberg University · 2025 – 2027
            </p>
            <p className="font-body text-[rgba(248,243,236,0.65)] leading-relaxed">
              Research topic currently under development in collaboration with academic supervisors
              at Heidelberg University. Focus area spans biomedical instrumentation, clinical data
              systems, and medical device engineering. Title and abstract will be published upon
              project formalisation.
            </p>
          </div>
        </div>

        {/* Certifications as academic output */}
        <div className="mb-10">
          <h3 className="font-ui text-xs tracking-widest uppercase text-[var(--gold)] mb-6">
            Certifications &amp; Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title:    'Biomedical Visualisation',
                provider: 'Coursera',
                status:   'Completed',
                note:     'Techniques for medical illustration and imaging data visualisation.',
              },
              {
                title:    'Additional Certification',
                provider: 'Forthcoming',
                status:   'Planned',
                note:     'IEC 60601-1 awareness or clinical informatics — in consideration.',
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="p-6 border"
                style={{
                  border:     `1px solid ${cert.status === 'Completed' ? 'rgba(212,168,71,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  background: cert.status === 'Completed' ? 'rgba(184,137,42,0.07)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span
                    className="font-ui text-[10px] tracking-widest uppercase px-2 py-0.5"
                    style={{
                      border:     `1px solid ${cert.status === 'Completed' ? 'rgba(212,168,71,0.4)' : 'rgba(255,255,255,0.15)'}`,
                      color:      cert.status === 'Completed' ? 'var(--gold)' : 'rgba(248,243,236,0.35)',
                    }}
                  >
                    {cert.status}
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold text-[var(--cream)] mb-1">
                  {cert.title}
                </h4>
                <p className="font-ui text-xs text-[var(--gold)] mb-2">{cert.provider}</p>
                <p className="font-body text-sm text-[rgba(248,243,236,0.5)]">{cert.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications placeholder */}
        <div>
          <h3 className="font-ui text-xs tracking-widest uppercase text-[var(--gold)] mb-6">
            Publications &amp; Conferences
          </h3>
          <div
            className="p-8 border border-dashed border-[rgba(212,168,71,0.2)] text-center"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="text-3xl text-[rgba(212,168,71,0.3)] mb-3">✦</div>
            <p className="font-ui text-xs tracking-widest uppercase text-[rgba(248,243,236,0.3)] mb-2">
              In Development
            </p>
            <p className="font-body text-[rgba(248,243,236,0.45)]">
              Conference posters and academic publications are planned as part of M.Sc. research.
              This section will be updated as outputs are completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
