import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        background: "#000d0f",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Main Content */}
      <About />
      <Experience />
      <Education />
      <Projects />
      <Research />
      <Skills />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}