'use client'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-10 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 30% 70%, rgba(107, 26, 42, 0.8) 0%, transparent 50%),
          linear-gradient(160deg, #2E0910 0%, #4A0F1C 60%, #3A0E18 100%)
        `,
      }}
    >
      {/* Decorative element */}
      <div
        className="absolute bottom-0 right-0 w-72 h-72 opacity-5 pointer-events-none"
        style={{ color: 'var(--gold)', fontSize: '18rem', lineHeight: 1 }}
      >
        ✚
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="section-label text-[var(--gold)] mb-4">07 — Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--cream)] mb-6 leading-tight">
              Let's Build
              <br />
              <span className="text-[var(--gold)] italic font-normal">Something Together</span>
            </h2>
            <p className="font-body text-[rgba(248,243,236,0.7)] text-lg leading-relaxed mb-10">
              Open to research collaborations, clinical engineering roles, internships, and
              academic opportunities — particularly in Germany and Europe. I am always glad to
              connect with professionals in the medical device and healthcare technology space.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  label: 'Email',
                  value: 'phileyakoruth10@gmail.com',
                  href:  'mailto:phileyakoruth10@gmail.com',
                  icon:  '✉',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/phileya-susan-koruth-551802263',
                  href:  'https://www.linkedin.com/in/phileya-susan-koruth-551802263',
                  icon:  '⟐',
                },
                {
                  label: 'Location',
                  value: 'Heidelberg, Germany',
                  href:  null,
                  icon:  '◎',
                },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[var(--gold)] text-sm border border-[rgba(212,168,71,0.3)]"
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-ui text-[10px] tracking-widest uppercase text-[rgba(248,243,236,0.4)] mb-0.5">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-body text-[rgba(248,243,236,0.85)] hover:text-[var(--gold)] transition-colors text-sm break-all"
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-body text-[rgba(248,243,236,0.85)] text-sm">
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – CTA card */}
          <div
            className="p-10"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border:     '1px solid rgba(212,168,71,0.25)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="text-4xl text-[var(--gold)] mb-6 text-center">✚</div>
            <h3 className="font-display text-2xl font-semibold text-[var(--cream)] text-center mb-3">
              Currently Available
            </h3>
            <p className="font-body text-[rgba(248,243,236,0.6)] text-center mb-8 text-sm leading-relaxed">
              Open to research, internships, and clinical engineering opportunities across Europe.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:phileyakoruth10@gmail.com"
                className="block w-full text-center py-3.5 font-ui text-sm tracking-widest uppercase transition-all duration-300"
                style={{
                  background: 'var(--gold)',
                  color:      'var(--wine-deeper)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--gold)'
                }}
              >
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/phileya-susan-koruth-551802263"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-3.5 font-ui text-sm tracking-widest uppercase border border-[rgba(212,168,71,0.4)] text-[var(--gold)] hover:bg-[rgba(212,168,71,0.1)] transition-all duration-300"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
