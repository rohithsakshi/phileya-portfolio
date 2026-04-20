'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* subtle animated heartbeat-like particle field */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: { x: number; y: number; r: number; speed: number; angle: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        angle: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008
      particles.forEach(p => {
        p.x += Math.cos(p.angle) * p.speed
        p.y += Math.sin(p.angle) * p.speed + Math.sin(t) * 0.08
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 168, 71, ${p.alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(107, 26, 42, 0.9) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(74, 15, 28, 0.8) 0%, transparent 60%),
          linear-gradient(160deg, #2E0910 0%, #4A0F1C 40%, #6B1A2A 70%, #3A0E18 100%)
        `,
      }}
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      />

      {/* Decorative cross / medical symbol top right */}
      <div
        className="absolute top-24 right-12 opacity-10 hidden lg:block pointer-events-none select-none"
        style={{ color: '#D4A847', fontSize: '7rem', lineHeight: 1 }}
      >
        ✚
      </div>

      {/* Corner accents */}
      <div className="absolute top-20 left-8 w-16 h-16 border-t border-l border-[rgba(212,168,71,0.3)] pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-b border-r border-[rgba(212,168,71,0.3)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="section-label text-[#D4A847] mb-6 animate-fade-up opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          Biomedical Engineer · Clinical Technology · Patient Safety
        </p>

        <h1
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-[#F8F3EC] leading-[1.05] mb-6 animate-fade-up opacity-0 delay-1"
          style={{ animationFillMode: 'forwards' }}
        >
          Phileya
          <br />
          <span
            className="font-normal italic"
            style={{ color: '#D4A847' }}
          >
            Susan Koruth
          </span>
        </h1>

        <div
          className="animate-fade-up opacity-0 delay-2"
          style={{ animationFillMode: 'forwards' }}
        >
          <div className="ornament my-6 max-w-sm mx-auto">
            <span className="font-ui text-xs tracking-widest text-[rgba(212,168,71,0.7)] whitespace-nowrap">
              M.Sc. Biomedical Engineering
            </span>
          </div>
        </div>

        <p
          className="font-body text-lg sm:text-xl text-[rgba(248,243,236,0.75)] max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up opacity-0 delay-3"
          style={{ animationFillMode: 'forwards' }}
        >
          Clinical engineer focused on critical care technology, medical device safety,
          and the engineering layer beneath hospital operations.
          <br />
          <span className="text-[rgba(212,168,71,0.9)] font-medium">Heidelberg University, Germany.</span>
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-4"
          style={{ animationFillMode: 'forwards' }}
        >
          <a
            href="#experience"
            className="px-8 py-3 font-ui text-sm tracking-widest uppercase text-[#F8F3EC] border border-[rgba(212,168,71,0.6)] hover:bg-[#D4A847] hover:border-[#D4A847] hover:text-[#2E0910] transition-all duration-300"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-8 py-3 font-ui text-sm tracking-widest uppercase text-[#D4A847] hover:text-[#F8F3EC] transition-colors duration-300"
          >
            Get In Touch →
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto border-t border-[rgba(212,168,71,0.2)] pt-10 animate-fade-up opacity-0 delay-5"
          style={{ animationFillMode: 'forwards' }}
        >
          {[
            { value: '91%', label: 'B.Tech Grade' },
            { value: '3',   label: 'Clinical Roles' },
            { value: '2',   label: 'Countries' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-[#D4A847]">
                {stat.value}
              </div>
              <div className="font-ui text-xs tracking-widest uppercase text-[rgba(248,243,236,0.5)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-ui text-[10px] tracking-widest uppercase text-[#D4A847]">Scroll</span>
        <div
          className="w-px h-8 bg-gradient-to-b from-[#D4A847] to-transparent"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  )
}
