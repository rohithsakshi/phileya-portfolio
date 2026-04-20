export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center border-t border-[rgba(184,137,42,0.15)]"
      style={{ background: '#1C0A10' }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-lg text-[var(--gold)] mb-1">Phileya Susan Koruth</p>
        <p className="font-ui text-xs tracking-widest uppercase text-[rgba(248,243,236,0.3)] mb-4">
          M.Sc. Biomedical Engineering · Heidelberg University
        </p>
        <div className="hr-gold max-w-xs mx-auto mb-4" />
        <p className="font-ui text-[10px] tracking-widest uppercase text-[rgba(248,243,236,0.2)]">
          © {new Date().getFullYear()} · Heidelberg, Germany
        </p>
      </div>
    </footer>
  )
}
