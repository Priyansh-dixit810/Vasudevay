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
import Footer from "@/components/layout/footer";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const isDark = useThemeStore((s) => s.theme) === "dark";

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${isDark ? "bg-black/70 text-white" : "bg-white text-black"}`}
    >
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

            <SectionWrapper id="hero">
              {" "}
              <Hero />{" "}
            </SectionWrapper>

            <SectionWrapper id="start">
              {" "}
              <Start />{" "}
            </SectionWrapper>

            {/* About can now grow as long as it needs to */}
            <SectionWrapper id="aboutus">
              {" "}
              <About />{" "}
            </SectionWrapper>

            {/* The Footer stays below everything naturally */}
            <div className="snap-start">
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
