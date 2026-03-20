"use client";

import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import { useThemeStore } from "@/store/theme";
import SectionWrapper from "@/components/ui/section-wrapper";
import Start from "@/components/sections/start";
import About from "@/components/sections/about";
import Steps from "@/components/sections/steps";

export default function HomePage() {
  const isDark = useThemeStore((s) => s.theme) === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        isDark ? "bg-black/70 text-white" : "bg-white text-black"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-full"
        >
          <SectionWrapper id="hero">
            <Hero />
          </SectionWrapper>

          <SectionWrapper id="start">
            <Start />
          </SectionWrapper>

          <SectionWrapper id="steps" fullHeight={false}>
            <Steps />
          </SectionWrapper>

          <SectionWrapper id="aboutus">
            <About />
          </SectionWrapper>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}