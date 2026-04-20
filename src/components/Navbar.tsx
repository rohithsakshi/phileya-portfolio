'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#about',       label: 'About'       },
  { href: '#experience',  label: 'Experience'  },
  { href: '#projects',    label: 'Projects'    },
  { href: '#research',    label: 'Research'    },
  { href: '#skills',      label: 'Skills'      },
  { href: '#contact',     label: 'Contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(46, 9, 16, 0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,137,42,0.2)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-sm font-semibold tracking-widest text-[#D4A847] uppercase"
        >
          PSK
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:phileyakoruth10@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 border border-[rgba(184,137,42,0.5)] text-[#D4A847] font-ui text-xs tracking-widest uppercase hover:bg-[#6B1A2A] hover:border-[#6B1A2A] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#D4A847] flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-current transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : '' }}
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : '' }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(46, 9, 16, 0.98)',
          borderTop: menuOpen ? '1px solid rgba(184,137,42,0.2)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
