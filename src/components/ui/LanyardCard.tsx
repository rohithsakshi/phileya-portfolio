"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface LanyardCardProps {
  imageSrc: string;
  name: string;
  title: string;
  institution: string;
}

/*
IMPORTANT FIX:
Removed Math.random() inside JSX render.

That was causing:
"Warning: Prop style did not match"

because server and client generated different heights.

Now we use stable predefined values like civilized people.
*/

const barcodeHeights = [
  28, 42, 58, 36, 74, 48, 63,
  31, 81, 54, 26, 67, 39, 72,
  44, 59, 33, 77, 51, 29, 64,
  38, 69, 46, 57, 35, 61, 41,
];

export default function LanyardCard({
  imageSrc,
  name,
  title,
  institution,
}: LanyardCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useSpring(0, {
    stiffness: 150,
    damping: 25,
  });

  const mouseY = useSpring(0, {
    stiffness: 150,
    damping: 25,
  });

  const floatY = useSpring(0, {
    stiffness: 60,
    damping: 15,
  });

  const rotateX = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["8deg", "-8deg"]
  );

  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["-8deg", "8deg"]
  );

  const glareX = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const glareY = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["0%", "100%"]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovering(false);
  };

  useEffect(() => {
    let t = 0;

    const id = setInterval(() => {
      t += 0.02;
      floatY.set(Math.sin(t) * 8);
    }, 16);

    return () => clearInterval(id);
  }, [floatY]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      {/* Lanyard string */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "2px",
            height: "60px",
            background:
              "linear-gradient(to bottom, transparent, rgba(15,164,175,0.25))",
          }}
        />

        {/* Clasp */}
        <div
          style={{
            width: "24px",
            height: "8px",
            borderRadius: "4px",
            background: "rgba(15,164,175,0.2)",
            border:
              "0.5px solid rgba(15,164,175,0.3)",
            marginBottom: "-1px",
          }}
        />
      </div>

      {/* Floating Card */}
      <motion.div
        style={{
          y: floatY,
          perspective: 1000,
          position: "relative",
        }}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          style={{
            rotateX: hovering ? rotateX : 0,
            rotateY: hovering ? rotateY : 0,
            transformStyle: "preserve-3d",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "280px",
              background:
                "linear-gradient(145deg, rgba(0,49,53,0.96) 0%, rgba(15,74,79,0.92) 100%)",
              border:
                "0.5px solid rgba(15,164,175,0.18)",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.42), inset 0 0 0 0.5px rgba(175,221,229,0.05)",
              backdropFilter: "blur(14px)",
            }}
          >
            {/* Top Accent Line */}
            <div
              style={{
                height: "6px",
                background:
                  "linear-gradient(90deg, #0F4A4F 0%, #0FA4AF 50%, #0F4A4F 100%)",
              }}
            />

            {/* Institution */}
            <div
              style={{
                padding: "16px 22px 12px",
                borderBottom:
                  "0.5px solid rgba(175,221,229,0.06)",
              }}
            >
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color:
                    "rgba(175,221,229,0.42)",
                  textTransform: "uppercase",
                  fontFamily:
                    "var(--font-mono, monospace)",
                }}
              >
                {institution}
              </p>

              <p
                style={{
                  fontSize: "8px",
                  letterSpacing: "0.12em",
                  color:
                    "rgba(175,221,229,0.22)",
                  textTransform: "uppercase",
                  marginTop: "4px",
                  fontFamily:
                    "var(--font-mono, monospace)",
                }}
              >
                Germany · M.Sc. Biomedical Engineering
              </p>
            </div>

            {/* Image */}
            <div
              style={{
                padding: "22px 22px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "130px",
                  height: "160px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  border:
                    "0.5px solid rgba(15,164,175,0.24)",
                  boxShadow:
                    "0 10px 28px rgba(0,0,0,0.32)",
                }}
              >
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  className="object-cover object-top"
                  sizes="130px"
                />
              </div>
            </div>

            {/* Name + Title */}
            <div
              style={{
                padding: "18px 22px 22px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#AFDDE5",
                  marginBottom: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                {name}
              </p>

              <p
                style={{
                  fontSize: "11px",
                  color:
                    "rgba(175,221,229,0.48)",
                  marginBottom: "16px",
                  letterSpacing: "0.05em",
                }}
              >
                {title}
              </p>

              {/* Barcode */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  gap: "2px",
                  height: "26px",
                  opacity: 0.16,
                }}
              >
                {barcodeHeights.map(
                  (height, i) => (
                    <div
                      key={i}
                      style={{
                        width:
                          i % 3 === 0
                            ? "2px"
                            : "1px",
                        height: `${height}%`,
                        background: "#AFDDE5",
                        borderRadius: "1px",
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Glare */}
          {hovering && (
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "18px",
                pointerEvents: "none",
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(175,221,229,0.06) 0%, transparent 60%)`,
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}