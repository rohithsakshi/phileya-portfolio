"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{
            opacity: 0,
            y: -24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -24,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            background: "rgba(0, 49, 53, 0.72)",
            backdropFilter: "blur(22px) saturate(1.5)",
            WebkitBackdropFilter: "blur(22px) saturate(1.5)",
            borderBottom:
              "0.5px solid rgba(175, 221, 229, 0.08)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-[72px] flex items-center justify-between">
            {/* LEFT — Avatar Logo */}
            <a
              href="#hero"
              onClick={scrollToTop}
              className="relative flex items-center group"
            >
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "42px",
                  height: "42px",
                  border:
                    "1.5px solid rgba(15, 164, 175, 0.35)",
                  boxShadow:
                    "0 0 0 4px rgba(15, 164, 175, 0.06)",
                }}
              >
                <Image
                  src="/phileya-profile.jpg"
                  alt="Phileya Susan Koruth"
                  fill
                  className="object-cover object-top"
                  sizes="42px"
                />
              </div>
            </a>

            {/* RIGHT — Nav Links */}
            <div className="flex items-center gap-5 md:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] tracking-[0.04em] font-normal text-[rgba(175,221,229,0.55)] hover:text-[#AFDDE5] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}

              {/* CV Button */}
              <a
                href="/Phileya_Susan_Koruth_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border text-[11px] font-medium tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[rgba(15,164,175,0.10)]"
                style={{
                  border:
                    "0.5px solid rgba(15, 164, 175, 0.35)",
                  color: "#0FA4AF",
                }}
              >
                CV
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}