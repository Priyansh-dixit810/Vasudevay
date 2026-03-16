"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroLoader from "@/components/sections/intro-loader";
import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero"; 
import { useThemeStore } from "@/store/theme";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const isDark = useThemeStore((s) => s.theme) === "dark";

  return (
    <main className={`min-h-screen transition-colors duration-700 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
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
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}