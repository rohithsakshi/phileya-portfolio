'use client'

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-10"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left column – heading */}
          <div className="lg:col-span-4">
            <p className="section-label mb-4">01 — About</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-[var(--wine)]">
              Who I Am
            </h2>
            <div className="mt-6 w-12 h-px bg-[var(--gold)]" />

            {/* Quick facts card */}
            <div className="mt-10 card-elegant p-6 space-y-4">
              {[
                { label: 'Location',    value: 'Heidelberg, Germany' },
                { label: 'Degree',      value: 'M.Sc. Biomedical Engineering' },
                { label: 'University',  value: 'Heidelberg University' },
                { label: 'Languages',   value: 'English · German · Hindi · Malayalam' },
                { label: 'Email',       value: 'phileyakoruth10@gmail.com' },
              ].map(f => (
                <div key={f.label} className="flex flex-col">
                  <span className="font-ui text-[10px] tracking-widest uppercase text-[var(--gold)]">
                    {f.label}
                  </span>
                  <span
                    className="font-body text-[var(--text-dark)] text-sm mt-0.5"
                    style={{ wordBreak: 'break-word' }}
                  >
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – bio */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-display text-xl md:text-2xl text-[var(--wine)] font-semibold italic leading-relaxed">
              "Most engineers encounter critical care systems in textbooks.
               I encountered them in live ICUs."
            </p>

            <p className="font-body text-lg text-[var(--text-mid)] leading-relaxed">
              I am a Biomedical Engineering postgraduate at Heidelberg University with hands-on
              clinical experience across ICU environments, medical device procurement, and equipment
              lifecycle management. My work at <strong className="text-[var(--wine)]">Aster Medcity</strong> —
              troubleshooting ventilators and defibrillators in real-time emergency settings — gave
              me a ground-level understanding of patient safety systems that most engineers only
              encounter in textbooks.
            </p>

            <p className="font-body text-lg text-[var(--text-mid)] leading-relaxed">
              I am interested in critical care technologies, clinical data infrastructure, and the
              engineering layer beneath hospital operations. My academic journey spans three
              countries of clinical exposure, a first-class honours B.Tech degree, and active
              postgraduate study in Germany — a path shaped by a deep conviction that engineering
              excellence and patient safety are inseparable.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                {
                  icon: '✚',
                  title: 'Critical Care',
                  desc:  'Live ICU & emergency department device experience',
                },
                {
                  icon: '⚕',
                  title: 'Device Safety',
                  desc:  'ISO-compliant maintenance & lifecycle management',
                },
                {
                  icon: '◎',
                  title: 'Academic Rigour',
                  desc:  'First-class 91% B.Tech · Heidelberg M.Sc.',
                },
              ].map(h => (
                <div
                  key={h.title}
                  className="p-5 border border-[rgba(184,137,42,0.2)] bg-[rgba(184,137,42,0.04)] hover:border-[var(--gold)] transition-colors duration-300"
                >
                  <div className="text-2xl text-[var(--gold)] mb-3">{h.icon}</div>
                  <div className="font-display text-sm font-semibold text-[var(--wine)] mb-1">
                    {h.title}
                  </div>
                  <div className="font-ui text-xs text-[var(--text-light)] leading-relaxed">
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
