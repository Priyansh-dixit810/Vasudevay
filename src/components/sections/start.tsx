import { useThemeStore } from "@/store/theme";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Start() {
  const isDark = useThemeStore((s) => s.theme) === "dark";
  return (
    <div className="relative w-full h-full md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={
              isDark
                ? "/images/dark_livingroom.png"
                : "/images/light_livingroom.png"
            }
            alt="Living-room"
            fill
            priority
            className="object-cover object-center md:object-[center_30%]"
          />
          <div
            className={`absolute inset-0 transition-colors duration-700 ${
              isDark ? "bg-black/40" : "bg-black/20"
            }`}
          />
        </motion.div>
        <motion.div
          key={`content-${isDark ? "dark" : "light"}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-start pt-32 sm:pt-40 md:pt-48 px-6 text-white gap-6 md:gap-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[2rem] sm:text-5xl md:text-6xl  font-light tracking-tight sm:tracking-[0.12em] uppercase leading-[1.1] max-w-5xl text-center"
          >
            Transform Vision <br className="hidden sm:block" /> Into Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed opacity-90 max-w-[90%] sm:max-w-md md:max-w-xl"
          >
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge
            innovation, allowing you to transform your living spaces into the
            epitome of luxury.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            /* - Added hover effects and better touch target sizing
       - Changed from a simple border-b to something more interactive
    */
            className="mt-4 cursor-pointer text-xs sm:text-sm uppercase tracking-[0.3em] border-b border-white/40 pb-2 hover:border-white transition-colors duration-300"
          >
            Get in touch
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
