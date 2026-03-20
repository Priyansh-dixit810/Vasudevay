"use client";
import { useThemeStore } from "@/store/theme";
import { motion } from "framer-motion";
import { useEffect } from "react";

function IntroLoader({ onFinish }: { onFinish: () => void }) {
  const text = "Oskad".split("");
  const isDark = useThemeStore((s)=> s.theme) === "dark";
  useEffect(() => {
    const finish = setTimeout(() => {
      onFinish();
    }, 2200);

    return () => clearTimeout(finish);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`h-screen  flex items-center isolate justify-center ${isDark? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="flex flex-col items-center">
        <motion.img 
        src="images/peacock.png"
        alt="Feather"
        initial={{
          x: "100vw",
          y: 150,
          rotate: -60, 
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          x:["-100vw" , "30vw" , "0vw"],
          y:[150,-200,100],
          rotate: [-60,-45,0],
          opacity: [0, 1, 1],
          scale: [0.8, 1.1, 1],
        }}
        transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        className="w-64 -z-10 h-auto mb-6 object-contain"
        />

        <motion.h1 className="text-5xl font-light tracking-[0.2rem] uppercase ">
          {text.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
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
                delay: 0.07,
                duration: 1.5,
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