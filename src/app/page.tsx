"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroLoader from "@/components/sections/intro-loader";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero"; 
import { useThemeStore } from "@/store/theme";
import SectionWrapper from "@/components/ui/section-wrapper";
import Start from "@/components/sections/start";
import About from "@/components/sections/about";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const isDark = useThemeStore((s) => s.theme) === "dark";

  return (
    <main className={`min-h-screen transition-colors duration-700 ${isDark ? "bg-black/70 text-white" : "bg-white text-black"}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <IntroLoader key="loader" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full"
          >
            <Header />
            <div id="hero" className="snap-start min-h-screen relative ">
              <Hero/>
            </div>
            <div className="snap-start h-screen relative overflow-hidden">
              <SectionWrapper id="start">
                 <Start />
              </SectionWrapper>
            </div>
            <div className="snap-start h-screen relative">
              <SectionWrapper id="aboutus">
                 <About />
              </SectionWrapper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}