"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sway = {
  rotate: [-7, 7, -7],
  transition: {
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function PoemPhotos() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -left-2 -top-3 z-0 sm:-left-14 sm:-top-10"
        animate={sway}
        aria-hidden
      >
        <div className="overflow-hidden rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.08)] ring-1 ring-primary/10 dark:shadow-[0_2px_16px_rgba(0,0,0,0.35)] dark:ring-primary/15">
          <Image
            src="/images/hailey.png"
            alt=""
            width={56}
            height={72}
            className="h-14 w-11 object-cover object-top sm:h-16 sm:w-12"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -bottom-3 -right-2 z-0 sm:-bottom-4 sm:-right-6"
        animate={{
          rotate: [-7, 7, -7],
          transition: {
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          },
        }}
        aria-hidden
      >
        <div className="overflow-hidden rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.08)] ring-1 ring-primary/10 dark:shadow-[0_2px_16px_rgba(0,0,0,0.35)] dark:ring-primary/15">
          <Image
            src="/images/moi.png"
            alt=""
            width={56}
            height={72}
            className="h-14 w-11 object-cover object-top sm:h-16 sm:w-12"
            priority
          />
        </div>
      </motion.div>
    </>
  );
}
