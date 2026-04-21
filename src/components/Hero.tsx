"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleField from "@/components/ui/ParticleField";
import LanyardCard from "@/components/ui/LanyardCard";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 120% 80% at 60% 40%, #003135 0%, #001a1d 42%, #000d0f 100%)",
      }}
    >
      {/* Background Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticleField className="w-full h-full" />
      </div>

      {/* Soft Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(rgba(175,221,229,1) 1px, transparent 1px), linear-gradient(90deg, rgba(175,221,229,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, rgba(0,13,15,0.72) 100%)",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{
          y: contentY,
          opacity,
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 64px",
          boxSizing: "border-box" as const,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "48px",
            minHeight: "100vh",
            paddingTop: "80px",
            paddingBottom: "80px",
            boxSizing: "border-box" as const,
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{
              display: "flex",
              flexDirection: "column" as const,
              justifyContent: "center",
            }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #0FA4AF)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "#0FA4AF",
                  textTransform: "uppercase" as const,
                  fontFamily: "var(--font-mono, monospace)",
                  whiteSpace: "nowrap" as const,
                }}
              >
                Biomedical Engineer
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeUp} style={{ margin: "0 0 12px" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  fontWeight: 300,
                  color: "#AFDDE5",
                  lineHeight: 1.02,
                  letterSpacing: "-0.025em",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Phileya Susan
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  fontWeight: 600,
                  color: "#AFDDE5",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Koruth
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div variants={fadeUp} style={{ marginBottom: "24px" }}>
              <div
                style={{
                  width: "56px",
                  height: "1.5px",
                  background:
                    "linear-gradient(90deg, #0FA4AF, rgba(15,164,175,0.15))",
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "clamp(15px, 1.6vw, 18px)",
                color: "rgba(175,221,229,0.58)",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: "480px",
                letterSpacing: "0.01em",
                marginBottom: "28px",
              }}
            >
              M.Sc. Biomedical Engineering candidate at{" "}
              <span style={{ color: "rgba(175,221,229,0.86)" }}>
                Heidelberg University
              </span>
              . Bridging precision engineering with life sciences — from medical
              imaging to neural interfaces.
            </motion.p>

            {/* Tags */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "8px",
                marginBottom: "36px",
              }}
            >
              {[
                "Neural Engineering",
                "Medical Imaging",
                "Biomechanics",
                "Signal Processing",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "rgba(175,221,229,0.5)",
                    border: "0.5px solid rgba(175,221,229,0.12)",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "rgba(15,74,79,0.28)",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                alignItems: "center",
                gap: "16px",
                marginBottom: "48px",
              }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-block",
                  padding: "13px 32px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, #0FA4AF 0%, #0F4A4F 100%)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#AFDDE5",
                  textTransform: "uppercase" as const,
                  fontWeight: 500,
                  boxShadow: "0 10px 32px rgba(15,164,175,0.18)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                View Work
              </a>

              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "13px 32px",
                  borderRadius: "999px",
                  border: "0.5px solid rgba(175,221,229,0.2)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "rgba(175,221,229,0.62)",
                  textTransform: "uppercase" as const,
                  fontWeight: 400,
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.4,
                ease: "easeInOut",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "32px",
                  border: "0.5px solid rgba(175,221,229,0.22)",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "6px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "3px",
                    height: "6px",
                    borderRadius: "2px",
                    background: "rgba(15,164,175,0.65)",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "rgba(175,221,229,0.25)",
                  textTransform: "uppercase" as const,
                }}
              >
                Scroll
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — Lanyard Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <LanyardCard
              imageSrc="/phileya-profile.jpg"
              name="Phileya Susan Koruth"
              title="M.Sc. Biomedical Engineering"
              institution="Heidelberg University"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          zIndex: 10,
          background:
            "linear-gradient(to bottom, transparent, rgba(0,13,15,0.85))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
