import Navbar    from '@/components/Navbar'
import Hero      from '@/components/Hero'
import About     from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects  from '@/components/Projects'
import Research  from '@/components/Research'
import Skills    from '@/components/Skills'
import Contact   from '@/components/Contact'
import Footer    from '@/components/Footer'

export default function Home() {
  return (
    <main className="grain">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Research />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
