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
    <section className="min-h-screen md:h-screen flex flex-col px-6 md:px-16 py-20 md:py-25 gap-12 md:gap-8 overflow-x-hidden">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 flex flex-col gap-6 md:gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-4xl md:text-7xl font-light tracking-widest leading-[1.1] md:leading-[0.9]"
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
            className="text-base md:text-xl font-light leading-relaxed max-w-xl opacity-80"
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
          className="md:col-span-5 relative flex justify-center md:justify-end"
        >
          <Image
            src="/images/image.png"
            alt="Main Design"
            width={300}
            height={300}
            className={`rounded-md object-contain shadow-2xl w-full max-w-[250px] md:max-w-[300px] ${
              isDark ? "shadow-white/10" : "shadow-black/30"
            }`}
          />
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 mt-auto">
        <div className="md:col-span-7 flex flex-col justify-between gap-12 md:gap-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex justify-start"
          >
            <button
              className={`text-lg border-2 px-10 py-2 transition-transform active:scale-95 ${
                isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"
              }`}
            >
              Start Project
            </button>
          </motion.div>

          <div className="flex flex-wrap gap-8 md:gap-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex flex-col"
              >
                <h2 className="text-3xl md:text-5xl font-light mb-1 md:mb-2">
                  {stat.number}
                </h2>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:col-span-5 relative md:mr-10 isolate"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }} 
            className={`-top-4 -left-4 md:-top-6 md:-left-6 absolute ring-2 w-32 h-32 md:w-45 md:h-45 -z-10 rounded-xs ${
              isDark ? "ring-white/40" : "ring-black/40"
            }`}
          ></motion.div>
          <Image
            src="/images/image2.png"
            alt="Design detail"
            width={600}
            height={350}
            className={`rounded-sm object-cover h-[200px] md:h-[350px] w-full shadow-2xl ${
              isDark ? "shadow-white/5" : "shadow-black/40"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
}