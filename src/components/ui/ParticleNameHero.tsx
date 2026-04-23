"use client";

import Particles from "@tsparticles/react";

export default function ParticleNameHero() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "720px",
        height: "240px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* Particle Layer */}
      <Particles
        id="name-particles"
        options={{
          fullScreen: {
            enable: false,
          },

          background: {
            color: "transparent",
          },

          fpsLimit: 120,

          particles: {
            number: {
              value: 140,
            },

            color: {
              value: [
                "#ffffff",
                "#AFDDE5",
                "#0FA4AF",
              ],
            },

            shape: {
              type: "circle",
            },

            opacity: {
              value: 0.9,
            },

            size: {
              value: {
                min: 1,
                max: 3,
              },
            },

            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,

              outModes: {
                default: "bounce",
              },
            },

            links: {
              enable: true,
              distance: 18,
              color: "#d8ffff",
              opacity: 0.3,
              width: 1,
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["repulse", "grab"],
              },

resize: {
  enable: true
}            },

            modes: {
              repulse: {
                distance: 140,
                duration: 0.4,
              },

              grab: {
                distance: 160,

                links: {
                  opacity: 0.8,
                },
              },
            },
          },

          detectRetina: true,
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* Ghost Text */}
      <h1
        style={{
          position: "relative",
          zIndex: 2,
          fontSize:
            "clamp(56px, 7vw, 120px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          textAlign: "left",
          color: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
          fontFamily:
            "'Cormorant Garamond', serif",
        }}
      >
        Phileya Susan
        <br />
        Koruth
      </h1>
    </div>
  );
}