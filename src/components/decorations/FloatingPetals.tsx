"use client";

import { motion } from "framer-motion";

const petals = [
  { id: 1, x: "10%", y: "18%", size: 11, delay: 0, duration: 28 },
  { id: 2, x: "82%", y: "32%", size: 9, delay: 4, duration: 32 },
  { id: 3, x: "90%", y: "65%", size: 8, delay: 8, duration: 26 },
  { id: 4, x: "22%", y: "70%", size: 10, delay: 2, duration: 30 },
  { id: 5, x: "52%", y: "12%", size: 8, delay: 6, duration: 34 },
];

function Petal({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="currentColor"
      aria-hidden
    >
      <path d="M5 0.5 C7 3 8 6 5 9.5 C2 6 3 3 5 0.5Z" />
    </svg>
  );
}

export function FloatingPetals() {
  return (
    <>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute text-accent"
          style={{ left: petal.x, top: petal.y }}
          initial={{ opacity: 0.06, y: 0, x: 0, rotate: 0 }}
          animate={{
            opacity: [0.05, 0.09, 0.06, 0.08, 0.05],
            y: [0, -18, -8, -24, 0],
            x: [0, 6, -4, 8, 0],
            rotate: [0, 12, -8, 15, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Petal size={petal.size} />
        </motion.div>
      ))}
    </>
  );
}
