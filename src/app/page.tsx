"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import IntroLoader from "@/components/sections/intro-loader";
import { useThemeStore } from "@/store/theme";

export default function LandingPage() {
  const router = useRouter();
  const isDark = useThemeStore((s) => s.theme) === "dark";
  const [showLoader, setShowLoader] = useState(true);

  return (
    <main className={`min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          router.replace("/home");
        }}
      >
        {showLoader && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="min-h-screen"
          >
            <IntroLoader
              onFinish={() => {
                setShowLoader(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}