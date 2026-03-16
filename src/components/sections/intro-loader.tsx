"use client";
import { useThemeStore } from "@/store/theme";
import { motion } from "framer-motion";
import { useEffect } from "react";

function IntroLoader({ onFinish }: { onFinish: () => void }) {
  const text = "Vasudevay".split("");
  const isDark = useThemeStore((s)=> s.theme) === "dark";
  useEffect(() => {
    const finish = setTimeout(() => {
      onFinish();
    }, 4800);

    return () => clearTimeout(finish);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`h-screen  flex items-center justify-center ${isDark? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="flex flex-col items-center">
        <motion.h1 className="text-5xl font-light tracking-widest">
          {text.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <div className="mt-6">
          <div className={`relative w-48 h-px overflow-hidden ${isDark? "bg-white/20" : "bg-black/20"}`}>
            <motion.div
              className={`absolute inset-0 ${isDark? "bg-white" : "bg-black"}`}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.15,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IntroLoader;