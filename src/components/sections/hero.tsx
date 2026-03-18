"use client";
import { useThemeStore } from "@/store/theme";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const isDark = useThemeStore((s) => s.theme) === "dark";

  const stats = [
    { number: "400+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "25+", label: "Design Styles" },
  ];

  return (
    <section className="min-h-screen w-full pt-20 overflow-x-hidden px-5 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:h-screen flex flex-col gap-12 md:gap-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-12">
        <div className="lg:col-span-9 flex flex-col gap-5 md:gap-7 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-widest sm:tracking-[0.12em] leading-[1.05]"
          >
            Where Light Belongs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
              delay: 0.2,
            }}
            className="mx-auto lg:mx-0 max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed opacity-80"
          >
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="lg:col-span-3 relative flex justify-center lg:justify-end"
        >
          <Image
            src="/images/image.png"
            alt="Main Design"
            width={300}
            height={300}
            className={`rounded-md object-contain shadow-2xl w-[78vw] max-w-60 sm:w-full sm:max-w-70 md:max-w-[320px] ${
              isDark ? "shadow-white/10" : "shadow-black/30"
            }`}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:mt-auto items-end">
        <div className="lg:col-span-7 flex flex-col gap-10 md:gap-12 justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <button
              className={`text-sm cursor-pointer sm:text-base md:text-2xl border-2 px-6 sm:px-8 md:px-14 py-2.5 sm:py-3 transition-transform active:scale-95 ${
                isDark
                  ? "bg-white text-black border-white"
                  : "bg-black/70 text-white border-black"
              }`}
            >
              Start Project
            </button>
          </motion.div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:flex lg:flex-wrap  lg:gap-16 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex flex-col"
              >
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-1">
                  {stat.number}
                </h2>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.28em] opacity-50 leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="lg:col-span-5 relative w-full max-w-full lg:ml-auto isolate"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 ring-2 -z-10 rounded-xs ${
              isDark ? "ring-white/40" : "ring-black/40"
            }`}
          />

          <Image
            src="/images/image2.png"
            alt="Design detail"
            width={600}
            height={350}
            className={`rounded-sm object-cover w-full h-45 sm:h-60 md:h-75 lg:h-87.5 shadow-2xl ${
              isDark ? "shadow-white/5" : "shadow-black/40"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
}